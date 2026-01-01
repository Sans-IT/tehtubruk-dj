import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
	id: string;
	nama: string;
	price: number;
	qty: number;
};

type CartStore = {
	items: Record<string, CartItem>;
	add: (item: CartItem) => void;
	remove: (id: string) => void;
	setQty: (id: string, qty: number) => void; // ✅
	reset: () => void;
};

export const useCart = create<CartStore>()(
	persist(
		(set, get) => ({
			items: {},

			add: (item) => {
				const items = { ...get().items };
				items[item.id] = {
					...item,
					qty: (items[item.id]?.qty || 0) + 1,
				};
				set({ items });
			},

			remove: (id) => {
				const items = { ...get().items };
				if (!items[id]) return;

				items[id].qty -= 1;
				if (items[id].qty <= 0) delete items[id];

				set({ items });
			},

			// ✅ INI KUNCI
			setQty: (id, qty) => {
				const items = { ...get().items };

				if (qty <= 0) {
					delete items[id]; // hapus kalau 0
				} else if (items[id]) {
					items[id].qty = qty;
				}

				set({ items });
			},
			reset: () => set({ items: {} }),
		}),
		{
			name: "cart-storage",
		}
	)
);
