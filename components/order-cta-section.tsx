import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

function OrderCTASection() {
	return (
		<section className="bg-primary text-white py-16">
			<div className="max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
				<h5 className="font-berkshire text-4xl font-bold mb-6">
					Rasakan Kesegaran Alami Teh Tubruk DJ
				</h5>
				<p className="mb-8 max-w-2xl">
					Mulailah perjalanan Anda menikmati kesegaran alami dari varian teh
					terbaik kami. Jadikan setiap tegukan lebih bermakna bersama
					<span className="font-semibold"> Teh Tubruk DJ</span>
				</p>
				<Link
					href={"/order"}
					className={cn(
						`${buttonVariants({ size: "lg" })} hover:bg-white bg-white text-primary font-semibold py-4 px-8`
					)}>
					Pesan Sekarang
				</Link>
			</div>
		</section>
	);
}

export default OrderCTASection;
