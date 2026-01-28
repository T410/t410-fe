import { Metadata } from "next";
import Link from "next/link";
import { Content } from "../ui/layout/content";

export const metadata: Metadata = {
	title: {
		template: "",
		default: "About Me",
	},
};

export default function Page() {
	return (
		<Content>
			<h1 className="text-4xl pb-4">Hey, I'm Tayyib.</h1>
			<p className="text-2xl">
				I am a Computer Engineer living in Hamburg, working as a Product
				Engineer focused mostly on frontend sizde of development.
			</p>
			<p className="text-2xl">
				Check my <Link href="/projects">projects</Link> or my CV here.
			</p>
		</Content>
	);
}
