import clsx from "clsx";
import Link from "next/link";

interface ItemProps {
	readonly label: string;
	readonly link?: string;
	readonly short?: string;
	readonly isActive: boolean;
	readonly additionalClassNames?: string;
}

export default function Item({
	label,
	link,
	short,
	isActive,
	additionalClassNames,
}: ItemProps) {
	return (
		<Link
			href={link || "#"}
			className={clsx(
				"hover:text-orange-500 duration-200",
				additionalClassNames,
				{
					"underline decoration-amber-300": isActive,
				},
			)}
		>
			<span className="hidden xs:inline">{label}</span>
			<span className="inline xs:hidden">{short ?? label}</span>
		</Link>
	);
}
