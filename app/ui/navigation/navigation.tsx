import { navigation } from "@/page.config.json";
import { Content } from "../layout/content";
import Item from "./item";

export function Navigation() {
	return (
		<Content className="absolute top-0 w-full min-h-16 py-4 dark:bg-stone-900 flex justify-start items-center text-2xl *:first:pe-4 sm:*:first:pe-8 *:not-first:ps-4">
			{navigation.items.map(({ name, href }, index) => (
				<Item key={name + index} label={name} link={href} />
			))}
		</Content>
	);
}
