import Link from "next/link";

interface ItemProps {
	readonly label: string;
	readonly link?: string;
}

export default function Item({ label, link }: ItemProps) {
	return (
		<Link href={link || "#"} className="hover:text-orange-500 duration-75">
			{label}
		</Link>
	);
}
