"use client";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { rupiah } from "@/lib/global-var";
import { useCart } from "@/lib/use-cart";
import {
	MinusIcon,
	PlusIcon,
	ShoppingBagIcon,
	ShoppingCart,
	XIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export function CartSheet() {
	const [openDrawer, setOpenDrawer] = useState<boolean>(false);
	const [hasEvent, setHasEvent] = useState<boolean>(false);
	const cart = useCart();
	const items = Object.values(cart.items);
	const router = useRouter();

	const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);
	const total_item = items.reduce((sum, item) => sum + item.qty, 0);

	return (
		<Sheet open={openDrawer} onOpenChange={setOpenDrawer}>
			<SheetTrigger asChild>
				<Button variant={"ghost"} size={"icon-sm"} className="relative sm:me-2">
					<ShoppingCart />
					{total > 0 && (
						<span
							className="
            absolute -top-2 -right-2
            h-5 min-w-5
            rounded-full
            bg-red-500
            text-white
            text-xs
            flex items-center justify-center
            px-1
          ">
							{total_item}
						</span>
					)}
				</Button>
			</SheetTrigger>
			<SheetContent className="overflow-y-scroll">
				<SheetHeader className="sticky top-0 z-10 py-2 bg-background justify-between flex flex-row items-center">
					<SheetTitle className="flex items-center gap-2 text-primary">
						<ShoppingBagIcon size={18} />
						Keranjang
					</SheetTitle>
					<Button
						variant={"ghost"}
						size={"icon-sm"}
						onClick={() => setOpenDrawer(!openDrawer)}>
						<XIcon className="size-4" />
						<span className="sr-only">Close</span>
					</Button>
				</SheetHeader>

				<div className="grid flex-1 auto-rows-min px-4 gap-6">
					{items.map((item, i) => (
						<div
							key={item.id}
							className="flex justify-between items-center border-b pb-2">
							<div className="relative">
								<p className="text-xs absolute -top-5 -left-3 text-muted-foreground">
									{i + 1}
								</p>
								<p className="font-medium">{item.nama}</p>
								<p className="text-sm text-muted-foreground">
									{rupiah(item.price)} × {item.qty}
								</p>
							</div>

							<div className="flex items-center gap-2">
								<Button
									size="icon-sm"
									className="w-7 h-7"
									onClick={() => cart.remove(item.id)}>
									<MinusIcon />
								</Button>

								<span>{item.qty}</span>

								<Button
									size="icon-sm"
									className="w-7 h-7"
									onClick={() => cart.add(item)}>
									<PlusIcon />
								</Button>
							</div>
						</div>
					))}
				</div>

				{/* catatan CTA whatsapp */}
				{items.length > 0 && (
					<SheetFooter className="sticky bottom-0 bg-background pt-2">
						<div className="space-y-2">
							<p className="font-semibold">Total: {rupiah(total)}</p>

							{/* acara || event */}
							<div className="space-y-2">
								<Label
									htmlFor="event-name"
									className="text-xs text-muted-foreground ">
									Apa pemesananmu memiliki acara?
									<span className="font-normal">(opsional)</span>
								</Label>

								<Input
									id="event-name"
									className="text-xs"
									placeholder="catering, pernikahan, jumat berkah"
								/>
							</div>

							{/* catatan */}
							<div className="space-y-2">
								<Label
									htmlFor="catatan-belanja"
									className="text-xs text-muted-foreground font-normal">
									{`Tambahkan catatan*`}
								</Label>
								<Textarea
									id="catatan-belanja"
									rows={4}
									className="resize-none max-h-6 text-xs"
									placeholder={`"1 teh ori tanpa es"`}
								/>
							</div>
							<Button className="w-full" size={"sm"}>
								<FaWhatsapp />
								Kirim Order via Whatsapp
							</Button>
						</div>
					</SheetFooter>
				)}

				{/* jika barang kosong */}
				{items.length === 0 && (
					<React.Fragment>
						<p className="text-muted-foreground h-screen m-auto">
							Keranjang kosong
						</p>
						<SheetFooter>
							<Button
								onClick={() => {
									setOpenDrawer(!openDrawer);
									router.push("/menu");
								}}>
								<ShoppingBagIcon />
								Belanja Sekarang
							</Button>
						</SheetFooter>
					</React.Fragment>
				)}
			</SheetContent>
		</Sheet>
	);
}
