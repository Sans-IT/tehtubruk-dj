"use client"

import MaxWidth from "@/components/maxWidthDiv"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

// =========================
// MENU LIST
// =========================
const MENU_SACHET = [
  { value: "Teh Tubruk Original", price: 3000 },
  { value: "Jeruk Peras Jumbo", price: 5000 },
  { value: "Jeruk Susu Jumbo", price: 6000 },
  { value: "Lemon Tea", price: 5000 },
  { value: "Leci Tea", price: 5000 },
  { value: "Milo Tea", price: 5000 },
  { value: "Milk Tea", price: 5000 },
  { value: "Chocolatos Tea", price: 6000 },
  { value: "Matcha Tea", price: 6000 },
  { value: "Bengbeng Tea", price: 6000 },
  { value: "Cappucino Tea", price: 6000 },
]

const MENU_BUBUK = [
  { value: "Teh Tubruk Strawberry", price: 6000 },
  { value: "Teh Tubruk Mangga", price: 6000 },
  { value: "Teh Tubruk Lemon", price: 6000 },
  { value: "Teh Tubruk Thaitea", price: 6000 },
  { value: "Teh Tubruk Melon", price: 6000 },
  { value: "Teh Tubruk Leci", price: 6000 },
  { value: "Teh Tubruk Matcha", price: 6000 },
]

export default function OrderPage() {
  const [selectedMenu, setSelectedMenu] = useState<string>("")
  const [orders, setOrders] = useState<
    { name: string; price: number; qty: number }[]
  >([])

  // Tambah Order
  const addOrder = () => {
    if (!selectedMenu) return

    const allMenu = [...MENU_SACHET, ...MENU_BUBUK]
    const item = allMenu.find((i) => i.value === selectedMenu)
    if (!item) return

    // Jika sudah ada, tambah qty
    const exist = orders.find((o) => o.name === item.value)
    if (exist) {
      setOrders(
        orders.map((o) =>
          o.name === item.value ? { ...o, qty: o.qty + 1 } : o
        )
      )
    } else {
      setOrders([...orders, { name: item.value, price: item.price, qty: 1 }])
    }

    setSelectedMenu("")
  }

  // Hapus Order
  const removeOrder = (name: string) => {
    setOrders(orders.filter((o) => o.name !== name))
  }

  // Kirim WhatsApp
  const sendWhatsApp = () => {
    const phone = "6285236590012" // nomor kamu

    let text = "*PESANAN TEH TUBRUK*%0A%0A"

    orders.forEach((o) => {
      text += `• ${o.name} x${o.qty} - Rp${o.price * o.qty}%0A`
    })

    const total = orders.reduce((acc, o) => acc + o.price * o.qty, 0)

    text += `%0A*Total: Rp${total}*%0A%0A`
    text += "Instagram: @tehtubruk.dj%0A"
    text += "TikTok: tehtubruk.dj"

    const url = `https://wa.me/${phone}?text=${text}`
    window.open(url, "_blank")
  }

  return (
    <MaxWidth>
      <div className="flex flex-col gap-5">
      <h1 className="text-xl font-bold">Order Minuman</h1>

      {/* Select Menu */}
      <Select value={selectedMenu} onValueChange={setSelectedMenu}>
        <SelectTrigger className="sm:w-[400px] w-full">
          <SelectValue placeholder="Pilih Menu" />
        </SelectTrigger>

        <SelectContent align="start">
          <SelectGroup>
            <SelectLabel>Varian Teh Sachet</SelectLabel>
            {MENU_SACHET.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.value} - Rp{item.price}
              </SelectItem>
            ))}
          </SelectGroup>

          <SelectGroup>
            <SelectLabel>Varian Teh Bubuk</SelectLabel>
            {MENU_BUBUK.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.value} - Rp{item.price}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button onClick={addOrder} disabled={!selectedMenu}>
        Tambah Order
      </Button>

      {/* List Orders */}
      <div className="space-y-3">
        {orders.map((o) => (
          <div
            key={o.name}
            className="p-3 border rounded flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{o.name}</p>
              <p className="text-sm text-muted-foreground">
                Rp{o.price} × {o.qty} = Rp{o.price * o.qty}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Input
                type="number"
                min={1}
                className="w-16"
                value={o.qty}
                onChange={(e) =>
                  setOrders(
                    orders.map((x) =>
                      x.name === o.name
                        ? { ...x, qty: Number(e.target.value) }
                        : x
                    )
                  )
                }
              />
              <Button
                variant="destructive"
                size="sm"
                onClick={() => removeOrder(o.name)}
              >
                Hapus
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol WhatsApp */}
      {orders.length > 0 && (
        <Button className="w-full" onClick={sendWhatsApp}>
          Kirim ke WhatsApp
        </Button>
      )}
      </div>
    </MaxWidth>
  )
}
