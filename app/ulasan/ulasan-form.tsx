"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { authClient } from "@/lib/auth-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { StarRating } from "./star-rating";
import { Review } from "../generated/prisma/client";

export default function UlasanForm() {
	const session = authClient.useSession();
	const queryClient = useQueryClient();
	const router = useRouter();

	// --- FORM STATE ---
	const [pesan, setPesan] = useState("");
	const [rating, setRating] = useState(0);

	// ---------------- CREATE ----------------
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (rating === 0) {
			alert("Silakan beri rating terlebih dahulu");
			return;
		}

		createReview.mutate();
	};

	const signIn = async () => {
		await authClient.signIn.social({
			provider: "google",
			callbackURL: "/ulasan",
		});
	};

	const createReview = useMutation({
		mutationFn: async () => {
			const res = await axios.post<Review>("/api/ulasan", {
				userId: session?.data?.user.id,
				pesan,
				rating,
			});
			return res.data;
		},
		onSuccess: () => {
			setPesan("");
			setRating(0);

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
				<form onSubmit={handleSubmit} className="space-y-4 mb-10">
					<Textarea
						placeholder="Kritik & saran..."
						value={pesan}
						onChange={(e) => setPesan(e.target.value)}
						required
					/>

					<div>
						<label className="text-sm font-medium mb-1 block">Rating</label>
						<StarRating rating={rating} setRating={setRating} />

						<p className="text-xs text-muted-foreground mt-1">
							Berikan rating 1–5 bintang
						</p>
					</div>

					<Button
						type="submit"
						className="w-full"
						disabled={createReview.isPending}>
						{createReview.isPending ? "Mengirim..." : "Kirim Ulasan"}
					</Button>
				</form>
			)}
		</div>
	);
}
