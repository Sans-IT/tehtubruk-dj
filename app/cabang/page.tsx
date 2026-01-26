import React from "react";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Metadata } from "next";
import MaxWidthDiv from "@/components/maxWidthDiv";
import { noTelp } from "@/lib/global-var";

export const metadata: Metadata = {
	title: "Lokasi Cabang",
	description:
		"Cari gerai Teh Tubruk DJ terdekat di Gresik dan sekitarnya. Cek jam operasional dan rute lokasi di sini.",
	keywords: [
		"Teh Tubruk DJ Terdekat",
		"Lokasi Teh Tubruk Gresik",
		"Cabang Teh Tubruk DJ",
		"Lokasi Teh Tubruk DJ",
		"Teh Tubruk DJ Surabaya",
		"Teh Tubruk DJ Jakarta",
		"Teh Tubruk DJ Bandung",
		"Minuman Teh Alami",
	],
	openGraph: {
		title: "Lokasi Cabang Teh Tubruk DJ",
		description: "Kunjungi gerai kami di berbagai titik strategis di Gresik.",
		images: ["/cabang/og-cabang.jpg"],
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
		<section className="py-12">
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
