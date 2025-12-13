"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

function UlasanSession() {
	const [ratingFilter, setRatingFilter] = useState("all");
	const session = authClient.useSession();
	const queryClient = useQueryClient();

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

	const deleteReview = useMutation({
		mutationFn: async (id: string) => {
			const res = await axios.delete<Review>(`/api/ulasan?id=${id}`);
			return res.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["ulasan"] });
		},
	});

	return (
		<div className="space-y-3">
			<div className="flex items-center justify-between">
				<h2 className="text-2xl font-semibold">Ulasan Terbaru</h2>
				<RatingSelect value={ratingFilter} onChange={setRatingFilter} />
			</div>

			<p>
				Total ulasan yang diberikan{" : "}
				<span className="font-semibold">{reviews?.length ?? ""}</span>
			</p>

			{!loading && reviews.length === 0 && (
				<p className="text-center py-5">
					Belum ada ulasan. Jadilah yang pertama!
				</p>
			)}

			{/* loading state */}
			<div className="items-center grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3">
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
							<Card key={item.id} className="border-primary/20">
								<CardContent>
									<div className="flex items-center justify-between">
										<h3 className="font-semibold">{item.user.name}</h3>
										{item.userId === session.data?.user.id && (
											<div className="space-x-1.5">
												<Button
													size={"icon-sm"}
													variant={"outline"}
													className="w-7 h-7"
													onClick={() => deleteReview.mutate(item.id)}>
													<TrashIcon />
												</Button>
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

									<p className="text-sm text-muted-foreground mt-1">
										{item.pesan}
									</p>

									<p className="text-xs text-muted-foreground mt-2">
										{new Date(item.createdAt).toLocaleString("id-ID")}
									</p>
								</CardContent>
							</Card>
						))}
			</div>
		</div>
	);
}

export default UlasanSession;
