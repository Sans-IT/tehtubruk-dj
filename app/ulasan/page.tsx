import { Card, CardContent, CardHeader } from "@/components/ui/card";
import UlasanForm from "./ulasan-form";
import MaxWidthDiv from "@/components/maxWidthDiv";
import UlasanSession from "./ulasan-session";

export default function PageUlasan() {
	return (
		<MaxWidthDiv className="py-10">
			<h1 className="text-2xl font-bold mb-6 text-primary">
				Berikan Ulasan & Kritik Saran mu!
			</h1>
			<UlasanForm />
			<UlasanSession />
		</MaxWidthDiv>
	);
}
