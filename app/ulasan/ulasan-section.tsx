"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { authClient } from "@/lib/auth-client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Star, TrashIcon } from "lucide-react";
import React, { useState } from "react";
import { Prisma, Review } from "../generated/prisma/client";
import RatingSelect from "./start-select";

type ReviewWithUser = Prisma.ReviewGetPayload<{
	include: {
		user: true;
	};
}>;

function UlasanSection() {
	const [ratingFilter, setRatingFilter] = useState("all");
	const session = authClient.useSession();

	const {
		data: reviews,
		isLoading: loading,
		isSuccess: reviewsSuccess,
	} = useQuery({
		queryKey: ["ulasan"],
		queryFn: async () => {
			const response = await axios.get("/api/ulasan");
			return response.data;
		},
	});

	const averageRating = React.useMemo(() => {
		if (!reviews || reviews.length === 0) return 0;

		const total = reviews.reduce(
			(sum: number, item: Review) => sum + item.rating,
			0
		);

		return total / reviews.length;
	}, [reviews]);

	const ratingCount = React.useMemo(() => {
		if (!reviews) return {};

		return reviews.reduce((acc: Record<number, number>, item: Review) => {
			acc[item.rating] = (acc[item.rating] || 0) + 1;
			return acc;
		}, {});
	}, [reviews]);

	return (
		<div className="space-y-3">
			<div className="flex items-center justify-between">
				<h2 className="text-2xl font-semibold">Ulasan Terbaru</h2>
				<RatingSelect
					ratingCount={ratingCount}
					value={ratingFilter}
					onChange={setRatingFilter}
				/>
			</div>

			<div className="flex items-center gap-3">
				<span className="text-3xl font-bold">{averageRating.toFixed(1)}</span>
				<div className="flex flex-col">
					<div className="flex">
						{Array.from({ length: 5 }).map((_, i) => (
							<Star
								key={i}
								className={`w-4 h-4 ${
									i < Math.round(averageRating)
										? "fill-yellow-400 text-yellow-400"
										: "text-muted-foreground"
								}`}
							/>
						))}
					</div>
					<span className="text-sm text-muted-foreground">
						Dari {reviews?.length} ulasan
					</span>
				</div>
			</div>

			{!loading && reviews.length === 0 && (
				<p className="text-center py-5">
					Belum ada ulasan. Jadilah yang pertama!
				</p>
			)}

			{/* loading state */}
			<div className="items-center grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
				{loading && (
					<React.Fragment>
						<Skeleton className="w-full h-[150px]" />
						<Skeleton className="w-full h-[150px]" />
						<Skeleton className="w-full h-[150px]" />
					</React.Fragment>
				)}

				{/* render ulasan */}
				{reviewsSuccess &&
					reviews
						.filter((item: Review) =>
							ratingFilter === "all"
								? true
								: item.rating === Number(ratingFilter)
						)
						.map((item: ReviewWithUser) => (
							<Card
								id={item.id}
								key={item.id}
								className="border-primary/20 h-full">
								<CardContent className="flex flex-col justify-between h-full">
									<div className="flex items-center justify-between">
										<h3 className="font-semibold">
											{item.user.name}
											{item.user.id === session.data?.user.id && (
												<span className="text-primary font-normal">{` ( Anda )`}</span>
											)}
										</h3>
										{item.userId === session.data?.user.id && (
											<div className="space-x-1.5">
												<DeleteDialog item={item} session={session} />
											</div>
										)}
									</div>

									<div className="flex gap-0.5 mt-1">
										{Array.from({ length: item.rating }).map((_, i) => (
											<Star
												key={i}
												className="w-4 h-4 fill-yellow-400 text-yellow-400"
											/>
										))}
									</div>

									<p className="text-sm text-primary my-2.5 wrap-break-word whitespace-pre-wrap">
										{item.pesan}
									</p>

									<p className="text-xs text-muted-foreground mt-auto">
										{new Date(item.createdAt).toLocaleDateString("id-ID", {
											day: "2-digit",
											month: "long",
											year: "numeric",
										})}
									</p>
								</CardContent>
							</Card>
						))}
			</div>
		</div>
	);
}

// delete komen
const DeleteDialog = ({
	item,
	session,
}: {
	item: ReviewWithUser;
	session: any;
}) => {
	const queryClient = useQueryClient();

	const { mutate: deleteReview, isPending } = useMutation({
		mutationFn: async (id: string) => {
			const res = await axios.delete<Review>(`/api/ulasan?id=${id}`);
			return res.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["ulasan"] });
			queryClient.invalidateQueries({ queryKey: ["my-review"] });
		},
	});
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button size={"icon-sm"} variant={"outline"} className="w-7 h-7">
					<TrashIcon />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Apa kamu yakin ingin menghapus komentar mu?</DialogTitle>
					<DialogDescription>
						<p className="break-all whitespace-pre-wrap">
							Hapus komentar{"\n\n"}
							<span className="font-semibold text-primary">{`"${item.pesan}"`}</span>
							, {`\n\nrating ${item.rating}`}
						</p>
					</DialogDescription>
				</DialogHeader>
				<DialogFooter className="justify-end">
					<DialogClose asChild>
						<Button variant={"outline"}>Batal</Button>
					</DialogClose>
					<Button onClick={() => deleteReview(item.id)} disabled={isPending}>
						{isPending ? "Menghapus..." : "Hapus"}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default UlasanSection;
