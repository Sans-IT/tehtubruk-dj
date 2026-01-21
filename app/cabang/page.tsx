import React from "react";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Metadata } from "next";
import MaxWidthDiv from "@/components/maxWidthDiv";
import { noTelp } from "@/lib/global-var";

export const metadata: Metadata = {
	title: "Cabang Teh Tubruk DJ | Temukan Lokasi Kami",
	description:
		"Kunjungi cabang Teh Tubruk DJ terdekat di berbagai kota seperti Surabaya, Jakarta, Bandung, dan lainnya. Nikmati kesegaran teh alami di lokasi kami.",
	keywords: [
		"Cabang Teh Tubruk DJ",
		"Lokasi Teh Tubruk DJ",
		"Teh Tubruk DJ Surabaya",
		"Teh Tubruk DJ Jakarta",
		"Teh Tubruk DJ Bandung",
		"Minuman Teh Alami",
	],
	openGraph: {
		title: "Cabang Teh Tubruk DJ | Temukan Lokasi Kami",
		description:
			"Cari tahu lokasi cabang Teh Tubruk DJ di seluruh Indonesia. Nikmati minuman teh alami di kota Anda.",
		url: "https://www.tehdaun.com/cabang",
		images: [
			{
				url: "/images/cabang/cabang-tehdaun.jpg", // Ganti dengan gambar representatif
				width: 1200,
				height: 630,
				alt: "Cabang Teh Tubruk DJ",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Cabang Teh Tubruk DJ | Temukan Lokasi Kami",
		description:
			"Temukan cabang Teh Tubruk DJ terdekat dan nikmati kesegaran alami teh berkualitas tinggi.",
		images: ["/images/cabang/cabang-tehdaun.jpg"], // Ganti sesuai gambar
	},
};

function Cabang() {
	const branches = [
		{
			city: "Gresik",
			address: "Jalan bringkang no 76, Jawa Timur",
			contact: noTelp,
		},
	];

	return (
		<section className="bg-primary-foreground py-12">
			<MaxWidthDiv>
				<div className="text-center mb-8">
					<h1 className="text-4xl font-bold text-primary font-berkshire">
						Cabang Teh Tubruk DJ
					</h1>
					<p className="text-gray-700 mt-2">
						Temukan cabang terdekat kami dan nikmati kesegaran alami dari Teh
						Daun!
					</p>
				</div>

				<div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
					{branches.map((branch, index) => (
						<div
							key={index}
							className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4 hover:drop-shadow-xl drop-shadow-lg transform hover:scale-[101%] transition-all">
							<div className="flex items-center gap-4">
								<div className="p-4 bg-primary text-white rounded-full">
									<MapPin className="w-8 h-8" />
								</div>
								<h2 className="text-2xl font-semibold text-gray-800">
									{branch.city}
								</h2>
							</div>
							<p className="text-gray-600">Alamat : {branch.address}</p>
							<p className="text-gray-600">Telephone / WA : {branch.contact}</p>
							<Link
								href={`https://wa.me/${noTelp}`}
								className={`${buttonVariants({
									size: "lg",
								})} text-gray-600 font-semibold text-lg mt-auto`}>
								<Phone />
								Hubungi WhatsApp
							</Link>
						</div>
					))}
				</div>
			</MaxWidthDiv>
		</section>
	);
}

export default Cabang;
