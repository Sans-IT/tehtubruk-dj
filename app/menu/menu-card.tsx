"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { rupiah } from "@/lib/global-var";
import { useCart } from "@/lib/use-cart";
import { MinusIcon, PlusIcon, StarIcon, ThumbsUpIcon } from "lucide-react";
import Image from "next/image";

export default function MenuCard({ menu }: { menu: any }) {
	const cart = useCart();
	const qty = cart.items[menu.id]?.qty ?? 0;

	return (
		<Card className="pt-0">
			<CardHeader className="p-0 overflow-hidden rounded-md relative">
				<Image
					src={"/menu/lemon.jpg"}
					alt={menu.price.toString()}
					width={200}
					height={200}
					className="w-full"
				/>
				<div className="absolute top-3 left-3 z-10 flex gap-2">
					<Badge className="bg-rose-500 drop-shadow-md drop-shadow-rose-500/70 flex items-center gap-1">
						<ThumbsUpIcon className="w-3 h-3" />
						BestSeller
					</Badge>

					<Badge className="bg-primary drop-shadow-md drop-shadow-primary flex items-center gap-1">
						<StarIcon className="w-3 h-3" />
						Favorit
					</Badge>
				</div>
			</CardHeader>
			<CardContent>
				<CardTitle className="text-xl">{menu.nama}</CardTitle>

				<CardDescription className="text-lg text-primary font-semibold">
					{rupiah(menu.price)}
				</CardDescription>

				<span className="text-sm text-muted-foreground">
					{qty > 0 && <p>Total: {rupiah(qty * menu.price)}</p>}
				</span>
			</CardContent>
			<CardFooter className="mx-auto mt-auto justify-between w-full gap-2 lg:gap-5">
				<Button
					size="icon"
					variant="outline"
					onClick={() => cart.remove(menu.id)}
					disabled={qty === 0}>
					<MinusIcon />
				</Button>

				<Input
					type="number"
					min={0}
					value={qty}
					className="text-center"
					onChange={(e) => {
						const value = Number(e.target.value);
						if (Number.isNaN(value)) return;
						cart.setQty(menu.id, value);
					}}
				/>

				<Button size="icon" variant="outline" onClick={() => cart.add(menu)}>
					<PlusIcon />
				</Button>
			</CardFooter>
		</Card>
	);
}
