import { Metadata } from "next";
import { Content } from "../ui/layout/content";

export const metadata: Metadata = {
	title: {
		template: "",
		default: "Projects",
	},
};

export default function Page() {
	return (
		<Content>
			<h1>My Projects</h1>
		</Content>
	);
}
