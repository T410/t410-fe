import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		template: "",
		default: "About Me",
	},
};

export default function Page() {
	return <p>About Me Page</p>;
}
