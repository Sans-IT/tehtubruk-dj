"use client";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Star } from "lucide-react";

type RatingSelectProps = {
	value: string;
	onChange: (value: string) => void;
};

export default function RatingSelect({ value, onChange }: RatingSelectProps) {
	return (
		<Select value={value} onValueChange={onChange}>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Filter rating" />
			</SelectTrigger>

			<SelectContent>
				<SelectItem value="all">Semua Rating</SelectItem>

				{[5, 4, 3, 2, 1].map((rate) => (
					<SelectItem key={rate} value={rate.toString()}>
						<div className="flex items-center gap-1">
							{Array.from({ length: rate }).map((_, i) => (
								<Star
									key={i}
									className="w-4 h-4 fill-yellow-400 text-yellow-400"
								/>
							))}
						</div>
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
