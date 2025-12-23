import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Berkshire_Swash } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const bershireSwash = Berkshire_Swash({
	variable: "--font-berkshire-swash",
	subsets: ["latin"],
	weight: "400",
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Teh Tubruk DJ",
	description: "gerai no 1 teh tubruk dj di Gresik",
	icons: "/logo.png",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${bershireSwash.variable} antialiased`}>
				<QueryProvider>
					<Navbar />
					{children}
					<Footer />
				</QueryProvider>
			</body>
		</html>
	);
}
