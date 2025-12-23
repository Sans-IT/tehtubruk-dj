import MaxWidthDiv from "@/components/maxWidthDiv";
import OrderForm from "./order-form";

function Order() {
	return (
		<MaxWidthDiv className="py-10 space-y-2">
			<h1 className="text-2xl font-bold text-primary mb-4">Order Keranjang</h1>

			<OrderForm />
		</MaxWidthDiv>
	);
}

export default Order;
