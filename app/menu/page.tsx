export const dynamic = "force-dynamic";
import MaxWidthDiv from "@/components/maxWidthDiv";
import MenuSection from "./menu-section";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Daftar Menu",
	description:
		"Jelajahi berbagai varian menu Teh Tubruk DJ. Mulai dari teh original racikan tradisional hingga varian rasa kekinian yang segar dengan harga terjangkau.",
	keywords: [
		"Menu Teh Tubruk DJ",
		"Harga Es Teh Gresik",
		"Varian Teh Tubruk",
		"Minuman Segar Murah",
		"Es Teh Solo Gresik",
		"Teh Tarik DJ",
	],
	openGraph: {
		title: "Menu Spesial Teh Tubruk DJ - Segar & Otentik",
		description:
			"Cek daftar menu es teh terbaik di Gresik. Harga mulai dari Rp 5.000 saja!",
		url: "https://tehtubrukdj.com/menu",
		images: [
			{
				url: "/menu/teh-original.jpg", // Pastikan file ini ada di folder public
				alt: "Daftar Menu Teh Tubruk DJ",
				width: 1200,
				height: 630,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Menu Terlaris Teh Tubruk DJ",
		description: "Nikmati varian es teh tubruk favorit warga Gresik.",
		images: ["/menu/teh-original.jpg"],
	},
};

function Menu() {
	return (
		<MaxWidthDiv className="py-10 space-y-2">
			<h1 className="text-2xl font-bold text-primary">Menu</h1>
			<p className="text-muted-foreground text-md">
				Kamu bisa lihat dan pilih menu serta order via whatsApp disini, klik
				tombol keranjang diatas
			</p>
			<MenuSection />
		</MaxWidthDiv>
	);
}

export default Menu;
