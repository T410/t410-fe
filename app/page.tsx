import { lusitana } from "./ui/fonts";
import { Content } from "./ui/layout/content";
import Logo from "./ui/logo";

export default function Page() {
	return (
		<Content className={`${lusitana.className}`}>
			<Logo />
			<p>Lorem ipsum</p>
		</Content>
	);
}
