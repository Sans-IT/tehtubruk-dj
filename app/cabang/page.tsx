import React from "react";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Metadata } from "next";
import MaxWidthDiv from "@/components/maxWidthDiv";

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
			city: "Surabaya",
			address: "Jl. Kendangsari Utara No. 20, Surabaya, Jawa Timur",
			contact: "08912374414",
		},
		{
			city: "Jakarta",
			address: "Jl. Sudirman No. 50, Jakarta Pusat, DKI Jakarta",
			contact: "08123456789",
		},
		{
			city: "Bandung",
			address: "Jl. Setiabudi No. 80, Bandung, Jawa Barat",
			contact: "08198765432",
		},
		{
			city: "Yogyakarta",
			address: "Jl. Malioboro No. 25, Yogyakarta, DI Yogyakarta",
			contact: "08512345678",
		},
		{
			city: "Malang",
			address: "Jl. Ijen Boulevard No. 12, Malang, Jawa Timur",
			contact: "083456789012",
		},
		{
			city: "Denpasar",
			address: "Jl. Sunset Road No. 15, Denpasar, Bali",
			contact: "087654321098",
		},
		{
			city: "Medan",
			address: "Jl. Diponegoro No. 30, Medan, Sumatera Utara",
			contact: "081987654321",
		},
		{
			city: "Makassar",
			address: "Jl. Pettarani No. 7, Makassar, Sulawesi Selatan",
			contact: "082123456789",
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
							className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4 hover:shadow-xl transform hover:-translate-y-2 transition-all">
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
								href={"/"}
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
