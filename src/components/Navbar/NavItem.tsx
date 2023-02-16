import NextLink from "next/link";
import { Link, Text, ListItem } from "@chakra-ui/react";

interface NavItemProps {
	to: string;
	link: string | React.ReactNode;
	onClick?: () => void;
}

function NavItem({ to, link, onClick }: NavItemProps) {
	return (
		<>
			<ListItem>
				<Link
					textDecoration="none"
					as={NextLink}
					href={to}
					onClick={onClick}
					p="2"
					py="3"
					borderRadius="lg"
					fontSize="lg"
					_hover={{
						color: "gray.200",
						fontWeight: "bold",
						fontSize: "2xl",
						textDecoration: "none",
					}}
				>
					{link}
				</Link>
			</ListItem>
		</>
	);
}

export default NavItem;
