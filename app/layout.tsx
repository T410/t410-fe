import { afacad } from "@/app/ui/fonts";
import "@/app/ui/globals.css";
import type { Metadata } from "next";
import { Navigation } from "./ui/navigation/";

export const metadata: Metadata = {
	title: "Tayyib Cankat",
	description: "Computer Engineer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${afacad.className} antialiased`}>
				<Navigation />
				{children}
			</body>
		</html>
	);
}
