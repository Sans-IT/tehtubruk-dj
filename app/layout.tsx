import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Google Font
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";
import Script from "next/script";

// Menginisialisasi Font Geist Sans
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "300", "500", "700", "900"], // Pilih variasi font
	variable: "--font-poppins", // Variabel CSS untuk digunakan di Tailwind
});

export const metadata: Metadata = {
	title: {
		default: "Teh Tubruk DJ - Gerai Teh Tubruk No. 1",
		template: "%s | Teh Tubruk DJ",
	},
	assets: ["/og-logo.png"],
	description:
		"Nikmati kesegaran otentik dari Teh Tubruk DJ, gerai teh tubruk nomor 1. Racikan teh tradisional dengan cita rasa premium yang menenangkan.",
	keywords: [
		"Teh Tubruk",
		"Teh Gresik",
		"Teh Tubruk DJ Gresik",
		"Teh Tubruk DJ",
		"Minuman Segar",
		"Kuliner",
		"Es Teh Enak",
		"Gerai Teh DJ",
	],
	authors: [{ name: "Jayaprinting" }],
	creator: "Jayaprinting",
	metadataBase: new URL("https://tehtubrukdj.com"), // Ganti dengan domain asli nanti
	alternates: {
		canonical: "/",
	},
	icons: {
		icon: "/logo-black.svg",
		apple: "/logo-black.png", // Icon untuk iOS home screen
	},
	openGraph: {
		title: "Teh Tubruk DJ - Gerai Teh Tubruk No. 1 ",
		description:
			"Cita rasa teh tubruk otentik kini hadir. Segar, nikmat, dan menenangkan.",
		url: "https://tehtubrukdj.com",
		siteName: "Teh Tubruk DJ",
		images: [
			{
				url: "/og-logo.png", // Buat gambar ukuran 1200x630 untuk preview link
				width: 1200,
				height: 630,
				alt: "Tampilan Gerai Teh Tubruk DJ",
			},
		],
		locale: "id_ID",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Teh Tubruk DJ - Gerai Teh No. 1",
		description: "Teh Tubruk premium dengan racikan tradisional terbaik.",
		images: ["/og-logo.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				
				<meta name="google-adsense-account" content="ca-pub-4087021836796600"></meta>
			<Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4087021836796600"
crossOrigin="anonymous"></Script>

			<Script
				id="schema-org"
				type="application/ld+json"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "FoodEstablishment", // cocok buat gerai minuman
					"name": "Teh Tubruk DJ",
					"url": "https://tehtubrukdj.com",
					"logo": "https://tehtubrukdj.com/og-logo-full.jpg",
					"image": "https://tehtubrukdj.com/og-logo-full.jpg",
					"description":
						"Gerai Teh Tubruk No. 1 dengan cita rasa tradisional otentik.",
					"address": {
						"@type": "PostalAddress",
						"addressCountry": "ID"
					}
					}),
				}}
    		/>
			</head>
			<body className={`${poppins.variable} antialiased`}>
				<QueryProvider>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</QueryProvider>
			</body>
		</html>
	);
}
