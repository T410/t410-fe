"use client";

import { usePathname } from "next/navigation";
import { navigation } from "@/page.config.json";
import { Content } from "../layout/content";
import Item from "./item";

export function Navigation() {
	const pathname = usePathname();
	const [firstElemet, ...rest] = navigation.items;

	return (
		<Content className="absolute top-0 w-full min-h-16 py-4 flex justify-start items-center text-2xl">
			<Item
				label={firstElemet.name}
				short={firstElemet.short}
				link={firstElemet.href}
				isActive={pathname === firstElemet.href}
				additionalClassNames="text-yellow-400 font-bold pe-4 sm:pe-8"
			/>
			{rest.map(({ name, short, href }, index) => (
				<Item
					key={name + index}
					label={name}
					short={short}
					link={href}
					isActive={pathname === href}
					additionalClassNames="ps-4"
				/>
			))}
		</Content>
	);
}
