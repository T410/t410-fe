import { navigation } from "@/page.config.json";
import NavigationItem from "./item";

export default function Navigation() {
	return (
		<div className="fixed w-full min-h-16 px-2 py-4 dark:bg-gray-600 flex justify-start items-center *:not-first:ps-2">
			{navigation.items.map((item, index) => (
				<NavigationItem
					key={item.label + index}
					label={item.label}
					link={item.link}
				/>
			))}
		</div>
	);
}
