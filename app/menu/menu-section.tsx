"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { menu_tubruk } from "@/lib/global-var";
import { SearchIcon } from "lucide-react";
import React, { useMemo, useState } from "react";
import MenuCard from "./menu-card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function MenuSection() {
	const searchParams = useSearchParams();
	const router = useRouter();

	const query = searchParams.get("nama") || "";
	const [keyword, setKeyword] = useState(query);

	const filteredMenu = useMemo(() => {
		if (!query) return menu_tubruk;

		return menu_tubruk
			.map((kategori) => ({
				...kategori,
				items: kategori.items.filter((menu) =>
					menu.nama.toLowerCase().includes(query.toLowerCase())
				),
			}))
			.filter((kategori) => kategori.items.length > 0);
	}, [query]);

	const handleSearch = () => {
		if (!keyword) {
			router.push("/menu");
		} else {
			router.push(`/menu?nama=${encodeURIComponent(keyword)}`);
		}
	};

	return (
		<div className="space-y-2">
			{/* cari menu */}
			<div className="space-x-2 flex items-center">
				<Input
					placeholder="cari menu minuman"
					value={keyword}
					onChange={(e) => setKeyword(e.target.value)}
					onKeyDown={(e) => e.key === "Enter" && handleSearch()}
				/>
				<Button onClick={handleSearch}>
					<SearchIcon /> Cari
				</Button>
			</div>

			{/* menu render */}
			<div>
				{filteredMenu.map((kategori, i) => (
					<div key={i} className="space-y-3">
						<h3 className="text-primary mt-6 font-semibold text-xl">
							{kategori.kategori}
						</h3>
						<hr />

						<div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
							{kategori.items.map((menu) => (
								<MenuCard menu={menu} key={menu.id} />
							))}
						</div>
					</div>
				))}

				{filteredMenu.length === 0 && (
					<p className="mt-10 text-center text-muted-foreground">
						Menu tidak ditemukan
					</p>
				)}
			</div>
		</div>
	);
}
