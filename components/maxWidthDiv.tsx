import { cn } from "@/lib/utils";
import React from "react";

export default function MaxWidthDiv({
	children,
	className,
	...props
}: {
	children?: React.ReactNode;
	className?: string;
} & React.HtmlHTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={cn(
				className,
				"sm:px-5 px-4 sm:max-w-7xl w-full h-full mx-auto"
			)}>
			{children}
		</div>
	);
}
