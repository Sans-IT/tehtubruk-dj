import MaxWidthDiv from "@/components/maxWidthDiv";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
	title: "Tentang Kami | Teh Tubruk DJ",
	description:
		"Teh Tubruk DJ adalah UMKM yang menyajikan kesegaran minuman es teh dari bahan alami berkualitas. Temukan kisah kami dan dedikasi kami untuk memberikan pengalaman minum es teh yang tak terlupakan.",
	keywords: [
		"Tentang Teh Tubruk DJ",
		"UMKM minuman es teh",
		"Minuman teh alami",
		"Kisah Teh Tubruk DJ",
		"Es teh segar",
		"Produk Teh Tubruk DJ",
	],
	openGraph: {
		title: "Tentang Kami | Teh Tubruk DJ",
		description:
			"Teh Tubruk DJ menghadirkan minuman es teh segar dari bahan alami berkualitas. Nikmati cita rasa unik dan dedikasi kami dalam memberikan kebahagiaan melalui setiap tegukan.",
		url: "https://www.tehdaun.com/about-us",
		images: [
			{
				url: "/images/about-us/about-us.jpg", // Ganti dengan gambar representatif
				width: 1200,
				height: 630,
				alt: "Tentang Teh Tubruk DJ",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Tentang Kami | Teh Tubruk DJ",
		description:
			"Pelajari lebih lanjut tentang Teh Tubruk DJ, UMKM yang menghadirkan kesegaran es teh alami dan pengalaman minum yang tak terlupakan.",
		images: ["/images/about-us/about-us.jpg"], // Ganti sesuai gambar
	},
};

function AboutUs() {
	return (
		<div>
			<MaxWidthDiv className="my-10">
				<div className="max-w-4xl mx-auto px-6 text-center space-y-10">
					<h2 className="text-4xl font-bold text-primary mb-6 font-berkshire">
						Tentang Kami
					</h2>
					<Image
						src="/tentang.jpg"
						alt="About Us"
						width={800}
						height={400}
						className="mx-auto h-[400px] object-contain rounded-lg shadow-lg"
					/>
					<p className="text-lg text-gray-700 leading-relaxed">
						Tentang Teh Tubruk DJ Teh Tubruk DJ menghadirkan cita rasa khas teh
						tubruk tradisional dengan sensasi aroma yang kuat dan rasa yang
						menenangkan. Diracik dengan daun pilihan sehingga memberikan
						kenikmatan dalam setiap gelas.memiliki berbagai varian menu yang
						unik dan khas dengan berbagai pilihan,konsumen dapat merasakan
						kenikmatan berbagai varian dengan harga yang terjangkau
					</p>
				</div>
			</MaxWidthDiv>
		</div>
	);
}

export default AboutUs;
