import { navigation } from "@/page.config.json";
import Item from "./item";

export function Navigation() {
	return (
		<div className="absolute top-0 w-full min-h-16 px-8 py-4 dark:bg-stone-900 flex justify-start items-center text-2xl *:first:pe-8 *:not-first:ps-4">
			{navigation.items.map(({ label, link }, index) => (
				<Item key={label + index} label={label} link={link} />
			))}
		</div>
	);
}
