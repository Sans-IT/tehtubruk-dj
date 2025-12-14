"use client";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Review } from "../generated/prisma/client";
import { StarRating } from "./star-rating";

type UlasanFormValues = z.infer<typeof ulasanSchema>;

export const ulasanSchema = z.object({
	pesan: z
		.string()
		.min(1, "Komentar terlalu pendek")
		.max(150, "Maksimal 150 kata"),
	rating: z.number().min(1, "Rating wajib diisi").max(5),
});

export default function UlasanForm() {
	const session = authClient.useSession();
	const queryClient = useQueryClient();

	const form = useForm<UlasanFormValues>({
		resolver: zodResolver(ulasanSchema),
		defaultValues: {
			pesan: "",
			rating: 0,
		},
	});

	const signIn = async () => {
		await authClient.signIn.social({
			provider: "google",
			callbackURL: "/ulasan",
		});
	};

	const { mutate, isPending } = useMutation({
		mutationFn: async (props: UlasanFormValues) => {
			const { data } = await axios.post<Review>("/api/ulasan", {
				userId: session?.data?.user.id,
				pesan: props.pesan,
				rating: props.rating,
			});
			return data;
		},
		onSuccess: () => {
			form.setValue("pesan", "");
			form.setValue("rating", 0);

			// refresh list ulasan
			queryClient.invalidateQueries({ queryKey: ["ulasan"] });
		},
	});

	return (
		<div>
			{/* FORM ULASAN */}
			{!session.data ? (
				<p className="text-muted-foreground text-lg">
					Anda harus
					<span
						onClick={signIn}
						className="hover:underline cursor-pointer font-semibold text-primary mx-1">
						login
					</span>
					terlebih dahulu untuk menulis ulasan.
				</p>
			) : (
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit((data) => {
							mutate(data);
						})}
						className="space-y-4 mb-10">
						<FormField
							control={form.control}
							name="pesan"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Komentar</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Kritik & saran..."
											required
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div>
							<FormField
								control={form.control}
								name="rating"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-sm font-medium mb-1 block">
											Rating
										</FormLabel>

										<FormControl>
											<StarRating
												value={field.value}
												onChange={field.onChange}
											/>
										</FormControl>

										<p className="text-xs text-muted-foreground mt-1">
											Berikan rating 1–5 bintang
										</p>

										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<Button type="submit" className="w-full" disabled={isPending}>
							{isPending ? "Mengirim..." : "Kirim Ulasan"}
						</Button>
					</form>
				</Form>
			)}
		</div>
	);
}
