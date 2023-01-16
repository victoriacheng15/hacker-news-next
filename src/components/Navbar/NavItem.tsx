import NextLink from "next/link";
import { Link, Text, ListItem } from "@chakra-ui/react";

interface NavItemProps {
	to: string;
	link: string | React.ReactNode;
	display?: string[] | string
	onClick?: () => void
}

function NavItem({ to, link, display, onClick }: NavItemProps) {

	return (
		<>
			{to === "/" ? (
				<ListItem mr="auto">
					<Link as={NextLink} href={to}>
						{link}
					</Link>
				</ListItem>
			) : (
				<ListItem>
					<Link as={NextLink} href={to} display={display} onClick={onClick}>
						<Text as="span" fontSize="1.15rem" fontWeight="medium" textAlign="center">
							{link}
						</Text>
					</Link>
				</ListItem>
			)}
		</>
	);
}

export default NavItem;
