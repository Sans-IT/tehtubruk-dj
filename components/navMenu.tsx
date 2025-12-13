"use client";
import { authClient } from "@/lib/auth-client";
import { LogOutIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTrigger,
} from "./ui/drawer";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const MenuItem = [
	{
		nama: "Tentang",
		link: "/tentang",
	},
	{
		nama: "Menu",
		link: "/menu",
	},
	{
		nama: "Ulasan",
		link: "/ulasan",
	},
	,
	{
		nama: "Order",
		link: "/order",
	},
	{
		nama: "Cabang",
		link: "/cabang",
	},
];

function NavMenu() {
	const { data: session } = authClient.useSession();
	const [openDrawer, setOpenDrawer] = useState<boolean>(false);

	const signIn = async () => {
		const data = await authClient.signIn.social({
			provider: "google",
		});
	};
	const signOut = async () => {
		await authClient.signOut();
	};

	return (
		<div className="flex flex-row items-center gap-3 md:gap-0">
			<div className="hidden md:flex items-center justify-between gap-3 mr-4">
				{MenuItem.map((item) => {
					return (
						<Link
							href={`${item?.link}`}
							key={item?.nama}
							className="text-primary/70 hover:text-primary font-semibold">
							{item?.nama}
						</Link>
					);
				})}
			</div>

			<Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
				<DrawerTrigger className="md:hidden block">
					<MenuIcon />
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						{MenuItem.map((item) => {
							return (
								<Link
									href={`${item?.link}`}
									key={item?.nama}
									onClick={() => setOpenDrawer(false)}
									className="text-primary/70 hover:text-primary transition py-1.5">
									{item?.nama}
								</Link>
							);
						})}
						{!session && (
							<Button onClick={signIn} className="w-full text-muted">
								Login
							</Button>
						)}
					</DrawerHeader>
				</DrawerContent>
			</Drawer>

			{/* login and dropdown button */}
			<div>
				{!session ? (
					<Button onClick={signIn} className="hidden sm:block">
						Login
					</Button>
				) : (
					// Account Dropdown
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<button className="flex items-center gap-2">
								<Avatar className="h-8 w-8 rounded-full">
									<AvatarImage
										src={session?.user?.image || "/window.svg"}
										alt={session?.user?.name}
									/>
									<AvatarFallback className="rounded-lg">
										{session.user?.name.charAt(0)}
									</AvatarFallback>
								</Avatar>
							</button>
						</DropdownMenuTrigger>

						<DropdownMenuContent
							className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
							align="end"
							sideOffset={4}>
							<DropdownMenuLabel className="p-0 font-normal">
								<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
									<Avatar className="h-8 w-8 rounded-lg">
										<AvatarImage
											src={session?.user?.image || "/window.svg"}
											alt={session?.user?.name}
										/>
										<AvatarFallback className="rounded-full">
											{session.user?.name.charAt(0)}
										</AvatarFallback>
									</Avatar>
									<div className="grid flex-1 text-left text-sm leading-tight">
										<span className="truncate font-medium">
											{session?.user?.name}
										</span>
										<span className="text-muted-foreground truncate text-xs">
											{session?.user?.email}
										</span>
									</div>
								</div>
							</DropdownMenuLabel>
							<DropdownMenuItem onClick={signOut}>
								<LogOutIcon />
								Log out
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				)}
			</div>
		</div>
	);
}
export default NavMenu;
