export const MenuItem = [
	{
		nama: "Beranda",
		link: "",
	},
	{
		nama: "Tentang",
		link: "tentang",
	},
	{
		nama: "Menu",
		link: "menu",
	},
	{
		nama: "Ulasan",
		link: "ulasan",
	},
	,
	{
		nama: "Cabang",
		link: "cabang",
	},
	{
		nama: "Order",
		link: "order",
	},
];

export const noTelp = "6282230005890";

export const rupiah = (value: number) =>
	new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		minimumFractionDigits: 0,
	}).format(value);

export type MenuItem = (typeof menu_tubruk)[number]["items"][number];

export const menu_tubruk = [
	{
		kategori: "Menu sachet",
		items: [
			{
				id: "sachet-teh-original",
				img: "/menu/teh-original.jpg",
				nama: "Teh Tubruk Original",
				price: 3000,
				bestSeller: true,
			},
			{
				id: "sachet-jeruk-peras",
				img: "/menu/jeruk-peras.jpg",
				nama: "Jeruk Peras Jumbo",
				price: 5000,
				bestSeller: true,
			},
			{
				id: "sachet-milk-tea",
				img: "/menu/milk-tea.jpg",
				nama: "Jeruk Susu Jumbo",
				price: 6000,
				bestSeller: true,
			},
			{
				id: "sachet-lemon-tea",
				img: "/menu/lemon-tea.jpg",
				nama: "Lemon Tea",
				price: 5000,
			},
			{
				id: "sachet-leci-tea",
				img: "/menu/leci-tea.jpg",
				nama: "Leci Tea",
				price: 5000,
			},
			{
				id: "sachet-milo-tea",
				img: "/menu/milo-tea.jpg",
				nama: "Milo Tea",
				price: 5000,
			},
			{
				id: "sachet-milk-tea",
				img: "/menu/milk-tea.jpg",
				nama: "Milk Tea",
				price: 5000,
			},
			{
				id: "sachet-chocolatos",
				img: "/menu/chocolatos-tea.jpg",
				nama: "Chocolatos Tea",
				price: 6000,
			},
			{
				id: "sachet-matcha",
				img: "/menu/matcha-tea.jpg",
				nama: "Matcha Tea",
				price: 6000,
			},
			{
				id: "sachet-bengbeng",
				img: "/menu/bengbeng-tea.jpg",
				nama: "Bengbeng Tea",
				price: 6000,
			},
			{
				id: "sachet-cappucino",
				img: "/menu/cappucino-tea.jpg",
				nama: "Cappucino Tea",
				price: 6000,
			},
		],
	},
] as const;
