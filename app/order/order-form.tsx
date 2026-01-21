"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { noTelp, rupiah } from "@/lib/global-var";
import { useCart } from "@/lib/use-cart";
import { MinusIcon, NotepadTextIcon, PlusIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function OrderForm() {
	const [atasNama, setAtasNama] = useState("-");
	const [cabang, setCabang] = useState("-");
	const [event, setEvent] = useState("-");
	const [catatan, setCatatan] = useState("-");
	const cart = useCart();
	const items = Object.values(cart.items);
	const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);

	const phone = "6282230005890";

	const waText = encodeURIComponent(
		`Halo, saya mau order Teh Tubruk DJ 👋\n\n` +
			`👤 Diambil A.N:\n*${atasNama || "-"}* \n\n` +
			`📍 Cabang:\n*${cabang || "-"}* \n\n` +
			`🎉 Acara:\n*${event || "-"}* \n\n` +
			`📝 Catatan:\n*${catatan || "-"}* \n\n` +
			`🛒 Pesanan:\n` +
			items
				.map((i) => `- ${i.nama} x${i.qty} = ${rupiah(i.qty * i.price)}`)
				.join("\n\n") +
			`\n\n💰 Total:\n*${rupiah(total)}*`
	);

	if (items.length == 0) {
		return (
			<div className="text-muted-foreground space-y-2 text-center w-full m-auto">
				<p>Keranjang masih kosong</p>
				<Link href={"/menu"}>
					<Button className="w-full">
						<NotepadTextIcon />
						Tambah Menu
					</Button>
				</Link>
			</div>
		);
	}

	return (
		<div
			className={`grid grid-cols-1 ${items.length === 0 ? null : "md:grid-cols-3"} gap-5`}>
			<div className="md:col-span-2 gap-5 flex flex-col">
				{/* catatan */}
				<div className="border rounded-lg p-5 space-y-2">
					<div className="space-y-2">
						<p className="text-lg font-semibold">Catatan</p>
						<hr />

						{/* atas nama */}
						<Label
							htmlFor="atas-nama"
							className="text-xs text-muted-foreground">
							Diambil atas nama?
						</Label>
						<Input
							id="atas-nama"
							className="text-xs"
							placeholder="budi"
							onChange={(e) => setAtasNama(e.target.value)}
						/>

						{/* select cabang */}
						<Label
							htmlFor="pilih-cabang"
							className="text-xs text-muted-foreground ">
							{"Pilih cabang / tempat pengambilanmu"}
						</Label>
						<Select onValueChange={setCabang}>
							<SelectTrigger>
								<SelectValue
									placeholder="Tempat Pengambilan"
									id="pilih-cabang"
								/>
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel id="pilih-cabang">Pilih pengambilan</SelectLabel>
									<SelectItem value="Jalan bringkang no 76">
										Jalan bringkang no 76
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>

						{/* event /acara */}
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
							onChange={(e) => setEvent(e.target.value)}
						/>

						{/* catatan */}
						<div className="space-y-2">
							<Label
								htmlFor="catatan-belanja"
								className="text-xs text-muted-foreground font-normal">
								{`Tambahkan catatan mu disini*`}
							</Label>
							<Textarea
								id="catatan-belanja"
								rows={4}
								className="resize-none max-h-6 text-xs"
								placeholder={`"1 teh ori tanpa es"`}
								onChange={(e) => setCatatan(e.target.value)}
							/>
						</div>
					</div>
				</div>

				{/* pesanan */}

				<div className="border rounded-lg p-5 space-y-3">
					<div className="text-lg font-semibold space-y-2">
						<p>Pesanan</p>
						<hr />
					</div>

					{items.map((item) => (
						<div
							key={item.id}
							className="w-full flex flex-col sm:flex-row sm:items-center gap-3 justify-between border rounded-md p-3 relative">
							<div>
								<p className="font-medium">{item.nama}</p>
								<p className="text-sm text-muted-foreground">
									Rp {item.price.toLocaleString("id-ID")}
								</p>
							</div>

							<div className="flex items-center gap-2 ms-auto">
								<Button size="icon-sm" onClick={() => cart.remove(item.id)}>
									<MinusIcon />
								</Button>
								<Input
									type="number"
									min={1}
									value={item.qty}
									onChange={(e) => cart.setQty(item.id, Number(e.target.value))}
									className="w-16 border rounded px-2 py-1 text-center"
								/>
								<Button size="icon-sm" onClick={() => cart.add(item)}>
									<PlusIcon />
								</Button>

								<Button
									variant={"destructive"}
									size={"icon-sm"}
									className="absolute -top-3 -right-3 rounded-full size-5"
									onClick={() => cart.setQty(item.id, 0)}>
									<XIcon />
								</Button>
							</div>
						</div>
					))}
					<Link href={"/menu"}>
						<Button className="w-full" variant={"outline"}>
							<NotepadTextIcon />
							Tambah Menu
						</Button>
					</Link>
				</div>
			</div>

			{/* Total */}
			<div className="border rounded-lg p-5 space-y-3 h-fit">
				<div>
					<h2 className="font-semibold text-lg">Total Belanja</h2>
					<p>{rupiah(total)}</p>
					<div className="text-muted-foreground text-sm"></div>
				</div>
				<Button className="w-full gap-2" asChild>
					<a href={`https://wa.me/${noTelp}?text=${waText}`} target="_blank">
						<FaWhatsapp />
						Kirim Order via WhatsApp
					</a>
				</Button>
			</div>
		</div>
	);
}

export default OrderForm;
