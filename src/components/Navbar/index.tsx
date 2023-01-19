import { Box, Flex, UnorderedList } from "@chakra-ui/react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";

function Navbar() {
	return (
		<Flex
			as="nav"
			aria-label="main"
			bg="orange.400"
			color="gray.900"
			py="0.5rem"
		>
			<Flex maxW={1280} mx="auto" w="90%" alignItems="center" justifyContent="space-between">
				<Box>
					<Logo />
				</Box>
				<UnorderedList
					as="ul"
					display={["none", "none", "flex"]}
					alignItems="center"
					gap="4"
				>
					<NavItem to="/top" link="Top Stories" />
					<NavItem to="/show" link="Show Stories" />
					<NavItem to="/job" link="Job Stories" />
				</UnorderedList>
				<MobileMenu />
			</Flex>
		</Flex>
	);
}

export default Navbar;
