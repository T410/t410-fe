import { lusitana } from "./ui/fonts";
import Logo from "./ui/logo";

export default function Page() {
	return (
		<div className={`${lusitana.className}`}>
			<Logo />
			<p>Lorem ipsum</p>
		</div>
	);
}
