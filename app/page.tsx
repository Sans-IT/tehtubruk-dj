import MaxWidthDiv from "@/components/maxWidthDiv";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ArrowRight,
	BadgeCheckIcon,
	Coffee,
	CupSoda,
	FireExtinguisherIcon,
	Leaf,
	ThumbsUpIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const sections = [
	{
		icon: <Coffee className="text-primary text-4xl mb-4 w-10 h-10" />,
		title: "Kualitas Terbaik",
		description:
			"Teh Daun menggunakan daun teh pilihan, dipetik langsung dari kebun terbaik, memastikan cita rasa terbaik di setiap tegukan.",
	},
	{
		icon: <Leaf className="text-primary text-4xl mb-4 w-10 h-10" />,
		title: "Rasa Alami",
		description:
			"Setiap daun teh diproses dengan cermat untuk menjaga rasa alami dan kesegaran yang sempurna, menghadirkan kehangatan dalam setiap tegukan.",
	},
	{
		icon: <CupSoda className="text-primary text-4xl mb-4 w-10 h-10" />,
		title: "Kenyamanan dalam Setiap Tegukan",
		description:
			"Nikmati teh yang menenangkan dan penuh rasa, diracik dengan bahan alami terbaik untuk menghadirkan kenyamanan di setiap momen.",
	},
];

export default function Home() {
	return (
		<div className="flex flex-col gap-20">
			{/* hero section */}
			<header>
				<MaxWidthDiv>
					<div className="my-5 grid sm:grid-cols-2 grid-cols-1 gap-2 items-center">
						<div className="text-center sm:text-start flex flex-col gap-5 text-balance order-2 sm:order-none pt-10 sm:pt-0">
							<h1 className="text-4xl sm:text-5xl font-heshanty">
								&quot; Teh Tubruk DJ -
								<span className="text-primary font-semibold">
									Kesegaran Alami Dalam Setiap Tegukan
								</span>
								&quot;
							</h1>
							<p className="text-zinc-500 sm:text-lg">
								&quot;Temukan kehangatan dan kenikmatan dari teh berkualitas
								tinggi yang dipetik langsung dari kebun pilihan. Teh Tubruk
								menawarkan rasa alami dan segar yang diracik dengan cermat untuk
								menghadirkan pengalaman teh yang sempurna setiap saat.&quot;
							</p>
							<Link
								className={`${buttonVariants({
									size: "lg",
								})} sm:mx-0 mx-auto w-fit text-lg py-6`}
								href={"/variant"}>
								Lihat Varian Rasa
								<ArrowRight />
							</Link>
						</div>
						<div>
							<Image
								width="500"
								height="500"
								src="/banner.jpg"
								alt="Teh Daun"
								className="w-full"
							/>
						</div>
					</div>
				</MaxWidthDiv>
			</header>

			{/* benefit section */}
			<PendirianSection />
			{/* pendirian section */}
			<BenefitSection />
			{/* menu section */}
			<MenuSection />
		</div>
	);
}

const PendirianSection = () => {
	return (
		<section className="bg-primary text-muted py-20 text-center text-balance px-2.5">
			<div className="flex flex-col gap-5 max-w-5xl mx-auto">
				<h3 className="text-3xl font-bold">Awal didirikan Teh Tubruk</h3>
				<p className="text-md sm:text-lg">
					Teh Tubruk DJ didirikan pada tahun [tahun] di [lokasi], berawal dari
					keinginan menghadirkan kembali cita rasa teh tubruk tradisional yang
					kuat, aromatik, dan berkualitas. Dengan modal sederhana dan proses
					rumahan, usaha ini berkembang berkat dukungan pelanggan hingga menjadi
					UMKM dengan produk teh tubruk khas yang konsisten dan terpercaya.
				</p>
			</div>
		</section>
	);
};

const BenefitSection = () => {
	return (
		<section>
			<div className="mx-auto text-center mb-10">
				<h3 className="text-3xl font-semibold font-berkshire">
					Kenapa memilih Teh Tubruk DJ?
				</h3>
			</div>
			<div className="mx-auto flex flex-wrap justify-center gap-10">
				{sections.map((section, index) => (
					<Card
						key={index}
						className="p-5 gap-0 rounded-lg shadow flex flex-col items-center text-center max-w-xs w-full">
						{section.icon} {/* Icon */}
						<CardTitle className="text-xl font-semibold text-primary mb-2">
							{section.title}
						</CardTitle>
						<CardDescription className="text-zinc-500 text-md">
							{section.description}
						</CardDescription>
					</Card>
				))}
			</div>
		</section>
	);
};

const MenuSection = () => {
	const menuItems = [
		{
			nama: "Teh Tubruk Original",
			img: "ori",
			harga: "Rp 10.000",
			deskripsi: "Teh tubruk klasik dengan rasa autentik dan aroma yang kuat.",
			bestseller: true,
		},
		{
			nama: "Teh Tubruk Mangga",
			img: "mangga",
			harga: "Rp 12.000",
			deskripsi:
				"Teh tubruk dengan aroma mangga yang menyegarkan dan rasa manis alami.",
			bestseller: false,
		},
		{
			nama: "Teh Tubruk Anggur",
			img: "anggur",
			harga: "Rp 12.000",
			deskripsi:
				"Teh tubruk dengan sentuhan rasa anggur yang segar dan nikmat.",
			bestseller: false,
		},
		{
			nama: "Teh Tubruk Lemon",
			img: "lemon",
			harga: "Rp 12.000",
			deskripsi:
				"Teh tubruk dengan kesegaran lemon yang asam-manis, cocok diminum kapan saja.",
			bestseller: false,
		},
		{
			nama: "Teh Tubruk Leci",
			img: "leci",
			harga: "Rp 12.000",
			deskripsi:
				"Teh tubruk dengan aroma leci yang manis dan lembut, memberikan sensasi segar di setiap tegukan.",
			bestseller: true,
		},
	];
	return (
		<section className="bg-linear-to-b from-primary to-primary-dark text-muted py-20 text-center text-balance px-2.5">
			<MaxWidthDiv className="gap-5 sm:max-w-6xl grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1">
				<h3 className="text-4xl font-bold font-berkshire col-span-full text-center mb-10">
					Menu Andalan Teh Tubruk DJ
				</h3>
				{menuItems.map((item, index) => {
					return (
						<Card key={index}>
							<CardHeader className="relative">
								{item.bestseller && (
									<Badge className="absolute top-3 left-10 z-10 bg-red-500">
										<ThumbsUpIcon />
										BestSeller
									</Badge>
								)}
								<Image
									src={`/menu/${item.img}.jpg`}
									alt={item.nama}
									className="w-full"
									width={500}
									height={500}
								/>
							</CardHeader>
							<CardContent>
								<CardTitle>{item.nama}</CardTitle>
								<CardDescription>{item.deskripsi}</CardDescription>
							</CardContent>
							<CardFooter className="flex justify-between">
								<CardTitle>{item.harga}</CardTitle>
								<Button>Beli</Button>
							</CardFooter>
						</Card>
					);
				})}
			</MaxWidthDiv>
		</section>
	);
};
