import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useState } from "react";

type StarRatingProps = {
	value: number;
	onChange: (value: number) => void;
};

export function StarRating({ value, onChange }: StarRatingProps) {
	const [hover, setHover] = useState<number | null>(null);

	return (
		<div className="flex">
			{[1, 2, 3, 4, 5].map((star) => {
				const active = hover !== null ? star <= hover : star <= value;

				return (
					<button
						key={star}
						className="cursor-pointer"
						type="button"
						onMouseEnter={() => setHover(star)}
						onMouseLeave={() => setHover(null)}
						onClick={() => onChange(star)}>
						<Star
							className={`w-6 h-6 transition ${
								active
									? "fill-yellow-400 text-yellow-400"
									: "text-muted-foreground"
							}`}
						/>
					</button>
				);
			})}
		</div>
	);
}
