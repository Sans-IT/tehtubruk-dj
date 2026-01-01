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
			{ id: "sachet-teh-original", nama: "Teh Tubruk Original", price: 3000 },
			{ id: "sachet-jeruk-peras", nama: "Jeruk Peras Jumbo", price: 5000 },
			{ id: "sachet-jeruk-susu", nama: "Jeruk Susu Jumbo", price: 6000 },
			{ id: "sachet-lemon-tea", nama: "Lemon Tea", price: 5000 },
			{ id: "sachet-leci-tea", nama: "Leci Tea", price: 5000 },
			{ id: "sachet-milo-tea", nama: "Milo Tea", price: 5000 },
			{ id: "sachet-milk-tea", nama: "Milk Tea", price: 5000 },
			{ id: "sachet-chocolatos", nama: "Chocolatos Tea", price: 6000 },
			{ id: "sachet-matcha", nama: "Matcha Tea", price: 6000 },
			{ id: "sachet-bengbeng", nama: "Bengbeng Tea", price: 6000 },
			{ id: "sachet-cappucino", nama: "Cappucino Tea", price: 6000 },
		],
	},
	{
		kategori: "Menu bubuk",
		items: [
			{ id: "bubuk-strawberry", nama: "Teh Tubruk Strawberry", price: 6000 },
			{ id: "bubuk-mangga", nama: "Teh Tubruk Mangga", price: 6000 },
			{ id: "bubuk-lemon", nama: "Teh Tubruk Lemon", price: 6000 },
			{ id: "bubuk-thaitea", nama: "Teh Tubruk Thaitea", price: 6000 },
			{ id: "bubuk-melon", nama: "Teh Tubruk Melon", price: 6000 },
			{ id: "bubuk-leci", nama: "Teh Tubruk Leci", price: 6000 },
			{ id: "bubuk-matcha", nama: "Teh Tubruk Matcha", price: 6000 },
		],
	},
] as const;
