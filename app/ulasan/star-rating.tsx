import { Star } from "lucide-react";
import { useState } from "react";

type StarRatingProps = {
	rating: number;
	setRating: (value: number) => void;
};

export function StarRating({ rating, setRating }: StarRatingProps) {
	const [hover, setHover] = useState<number | null>(null);

	return (
		<div className="flex gap-1">
			{[1, 2, 3, 4, 5].map((star) => {
				const active = hover !== null ? star <= hover : star <= rating;

				return (
					<button
						key={star}
						type="button"
						onMouseEnter={() => setHover(star)}
						onMouseLeave={() => setHover(null)}
						onClick={() => setRating(star)}
						className="transition cursor-pointer">
						<Star
							className={`w-6 h-6 ${
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
