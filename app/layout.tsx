import { afacad } from "@/app/ui/fonts";
import "@/app/ui/globals.css";
import { Metadata } from "next";
import { Navigation } from "./ui/navigation";

export const metadata: Metadata = {
	title: {
		template: "%s | Tayyib Cankat",
		default: "Tayyib Cankat",
	},
	description: "Personal site of Tayyib Cankat",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${afacad.className} antialiased`}>
				<Navigation />
				<div className="w-full pt-20">{children}</div>
			</body>
		</html>
	);
}
