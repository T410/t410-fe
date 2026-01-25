import { lusitana } from "./ui/fonts";
import Logo from "./ui/logo";

export default function Page() {
	return (
		<div className={`${lusitana.className} w-full pt-20 px-8`}>
			<Logo />
			<p>Lorem ipsum</p>
		</div>
	);
}
