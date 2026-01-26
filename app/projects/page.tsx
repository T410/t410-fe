import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		template: "",
		default: "Projects",
	},
};

export default function Page() {
	return (
		<div>
			<h1>My Projects</h1>
		</div>
	);
}
