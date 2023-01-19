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
				<Link as={NextLink} href={to} onClick={onClick}>
					<Text
						as="span"
						fontSize="1.15rem"
						fontWeight="medium"
						textAlign="center"
					>
						{link}
					</Text>
				</Link>
			</ListItem>
		</>
	);
}

export default NavItem;
