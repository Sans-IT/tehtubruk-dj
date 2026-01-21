"use client";
import { Card } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import * as React from "react";

function TestimonialSection() {
	const {
		data: reviews,
		isLoading: loading,
		isSuccess: reviewsSuccess,
	} = useQuery({
		queryKey: ["ulasan"],
		queryFn: async () => {
			const response = await axios.get("/api/ulasan");
			// Memastikan data adalah array agar tidak error saat di-map
			return Array.isArray(response.data) ? response.data : [];
		},
	});

	// Konfigurasi Plugin AutoScroll untuk efek Marquee Draggable
	const autoScrollPlugin = React.useRef(
		AutoScroll({
			speed: 1, // Kecepatan jalan otomatis
			stopOnInteraction: false, // Tetap lanjut jalan setelah di-drag manual
		})
	);

	return (
		<section className="overflow-hidden">
			<div className="text-center mb-16">
				<h2 className="font-berkshire text-4xl sm:text-5xl font-bold text-primary mb-4">
					Apa Kata Pelanggan Kami
				</h2>
				<div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
			</div>

			{/* Tampilan Loading */}
			{loading && (
				<div className="flex justify-center items-center h-64">
					<div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
				</div>
			)}

			{/* Render Carousel saat data berhasil diambil */}
			{reviewsSuccess && reviews && reviews.length > 0 && (
				<Carousel
					opts={{
						align: "start",
						loop: true, // Berputar terus-menerus
						dragFree: true, // Memungkinkan geser bebas (Draggable)
					}}
					plugins={[autoScrollPlugin.current]}
					className="w-full">
					<CarouselContent className="-ml-4">
						{reviews.map((testimonial, index) => (
							<CarouselItem
								key={testimonial.id || index}
								className="pl-4 py-10 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
								<div className="p-2 h-full">
									<Card className="h-full text-center border drop-shadow-xl p-0 border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 bg-white rounded-[2.5rem] overflow-hidden group">
										<div className="flex flex-col p-10 h-full">
											{/* Identitas Pengguna */}
											<div className="flex items-center gap-5">
												<div className="relative w-14 h-14 shrink-0  mx-auto">
													<Image
														src={
															testimonial.user?.image || "/placeholder-user.png"
														}
														alt={testimonial.user?.name || "Customer"}
														fill
														className="rounded-full object-cover border-2 border-primary/10 group-hover:border-primary transition-colors duration-300"
													/>
												</div>
											</div>
											<div className="flex flex-col overflow-hidden text-center">
												<h4 className="font-bold text-zinc-900 text-lg truncate">
													{testimonial.user?.name}
												</h4>
											</div>
											{/* Rating Bintang */}
											<div className="flex text-orange-400 gap-1 mx-auto">
												{Array.from({ length: 5 }).map((_, i) => (
													<span key={i} className="text-xl">
														{i < (testimonial.rating || 5) ? "★" : "☆"}
													</span>
												))}
											</div>

											{/* Konten Pesan */}
											<p className="text-zinc-600 italic pt-4 leading-relaxed flex-grow text-lg ">
												&quot;{testimonial.pesan}&quot;
											</p>
										</div>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			)}

			{/* Keadaan jika data kosong */}
			{reviewsSuccess && reviews?.length === 0 && (
				<div className=" py-10 text-zinc-400 font-medium text-center">
					Belum ada ulasan untuk ditampilkan saat ini.
				</div>
			)}
		</section>
	);
}

export default TestimonialSection;
