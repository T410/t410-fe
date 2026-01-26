import * as Icon from "@heroicons/react/24/outline";
import { navigation } from "@/page.config.json";

export default function NavLinks() {
	return (
		<>
			{navigation.items.map((link) => {
				const LinkIcon = link.icon;
				return (
					<a
						key={link.name}
						href={link.href}
						className="flex h-12 grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
					>
						{LinkIcon && <Icon.AdjustmentsVerticalIcon className="w-6" />}
						<p className="hidden md:block">{link.name}</p>
					</a>
				);
			})}
		</>
	);
}
