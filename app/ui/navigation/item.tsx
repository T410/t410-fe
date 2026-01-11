interface NavigationItemProps {
	readonly label: string;
	readonly link?: string;
}

export default function NavigationItem({ label, link }: NavigationItemProps) {
	return (
		<a href={link} className="hover:text-orange-500 duration-75">
			{label}
		</a>
	);
}
