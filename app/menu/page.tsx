import MaxWidthDiv from "@/components/maxWidthDiv";
import MenuSection from "./menu-section";

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
