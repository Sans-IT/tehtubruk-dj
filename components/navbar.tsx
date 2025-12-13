import Image from "next/image";
import Link from "next/link";
import MaxWidth from "./maxWidthDiv";
import NavMenu from "./navMenu";

function Navbar() {
	return (
		<nav className="w-full flex items-center bg-background/90 shadow sticky top-0 z-50 border-b backdrop-blur-sm py-2.5">
			<MaxWidth className="justify-between flex items-center">
				<Link
					className="text-2xl text-primary font-bold flex items-center gap-2.5"
					href={"/"}>
					<Image
						src="/logo.png"
						alt="Logo Teh Tubruk DJ"
						width={40}
						height={40}
						className="invert sepia saturate-300 hue-rotate-100 brightness-90 contrast-100"
					/>
					<span>Teh Tubruk DJ</span>
				</Link>
				<NavMenu />
			</MaxWidth>
		</nav>
	);
}

export default Navbar;
