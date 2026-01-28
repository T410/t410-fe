// app/ui/content.tsx
import * as React from "react";
import { cn } from "@/app/lib/cn"; // or "../lib/cn" if you don't use @ alias

type Props = React.ComponentPropsWithoutRef<"main">;

export function Content({ className, ...props }: Props) {
	return (
		<main
			className={cn(
				"mx-auto w-full px-4 md:px-40 lg:px-60 2xl:px-96",
				className,
			)}
			{...props}
		/>
	);
}
