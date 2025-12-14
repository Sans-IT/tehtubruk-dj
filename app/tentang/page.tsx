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
						src="/images.jpg"
						alt="About Us"
						width={800}
						height={400}
						className="mx-auto h-[400px] object-contain rounded-lg shadow-lg"
					/>
					<p className="text-lg text-gray-700 leading-relaxed">
						<span className="font-semibold">Teh Tubruk DJ</span> adalah UMKM
						yang menghadirkan kesegaran minuman es teh yang diracik dari
						bahan-bahan alami berkualitas. Kami percaya bahwa setiap gelas es
						teh mampu memberikan kebahagiaan, kesegaran, dan semangat baru untuk
						dinikmati kapan saja.
					</p>
					<p className="text-lg text-gray-700 leading-relaxed">
						Semua varian es teh kami dibuat dengan penuh perhatian, memadukan
						cita rasa daun teh pilihan dan bahan alami yang menyegarkan. Dari
						rasa klasik yang sederhana hingga kombinasi unik, setiap tegukan
						dirancang untuk memanjakan lidah Anda.
					</p>
					<p className="text-lg text-gray-700 leading-relaxed">
						Dengan semangat inovasi dan pelayanan terbaik,{" "}
						<span className="font-semibold">Teh Tubruk DJ</span> terus berupaya
						memberikan pengalaman minum es teh yang tak terlupakan. Kami hadir
						untuk melengkapi setiap momen Anda, mulai dari waktu santai hingga
						kebersamaan bersama keluarga dan teman.
					</p>
					<Button size={"lg"}>Pelajari Lebih Lanjut</Button>
				</div>
			</MaxWidthDiv>
		</div>
	);
}

export default AboutUs;
