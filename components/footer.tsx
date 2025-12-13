import { MapPin, Phone, Instagram, Facebook, Twitter } from "lucide-react";
import React from "react";
import MaxWidthDiv from "./maxWidthDiv";
import Link from "next/link";

function Footer() {
	return (
		<div className="bg-emerald-50 bg-opacity-50 w-full h-full" id="footer">
			<MaxWidthDiv className="px-5 py-10">
				<div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
					{/* Tentang */}
					<div>
						<h2 className="text-3xl text-primary font-semibold mb-4 font-berkshire">
							Tentang Teh Tubruk DJ
						</h2>
						<p className="text-base">
							Teh Tubruk DJ menghadirkan cita rasa khas teh tubruk tradisional
							dengan sensasi aroma yang kuat dan rasa yang menenangkan. Diracik
							dengan daun pilihan demi menghadirkan kualitas yang konsisten di
							setiap gelas.
						</p>
					</div>

					{/* Kontak */}
					<ul className="flex flex-col gap-5 sm:mx-auto me-0">
						{/* Alamat */}
						<li className="flex gap-3 group">
							<div className="rounded-full border-2 border-black p-2 w-12 h-12 flex items-center justify-center">
								<MapPin className="group-hover:text-primary w-6 h-6" />
							</div>
							<div className="flex flex-col">
								<h3 className="text-primary font-semibold">Alamat</h3>
								<p className="group-hover:text-primary">
									Jl. Kendangsari Utara No. 20, Surabaya
								</p>
							</div>
						</li>

						{/* No Telp */}
						<li className="flex gap-3 group">
							<div className="rounded-full border-2 border-black p-2 w-12 h-12 flex items-center justify-center">
								<Phone className="group-hover:text-primary w-6 h-6" />
							</div>
							<div className="flex flex-col">
								<h3 className="text-primary font-semibold">No Telp / WA</h3>
								<p className="group-hover:text-primary">0891-2374-414</p>
							</div>
						</li>
					</ul>

					{/* Social Media */}
					<div>
						<h2 className="text-3xl text-primary font-semibold mb-4 font-berkshire">
							Ikuti Kami
						</h2>

						<div className="flex flex-col gap-4">
							<Link
								href="#"
								className="flex items-center gap-2 text-gray-700 hover:text-primary hover:scale-105 transition">
								<Instagram size={22} /> Instagram
							</Link>

							<Link
								href="#"
								className="flex items-center gap-2 text-gray-700 hover:text-primary hover:scale-105 transition">
								<Facebook size={22} /> Facebook
							</Link>

							<Link
								href="#"
								className="flex items-center gap-2 text-gray-700 hover:text-primary hover:scale-105 transition">
								<Twitter size={22} /> X / Twitter
							</Link>
						</div>
					</div>
				</div>
			</MaxWidthDiv>

			<div className="w-full bg-black py-2 text-white text-center text-sm">
				© {new Date().getFullYear()} Teh Tubruk DJ — Surabaya
			</div>
		</div>
	);
}

export default Footer;
