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
			<Box maxW={1280} mx="auto" w="90%">
				<UnorderedList as="ul" display="flex" alignItems="center" gap="4">
					<NavItem display={["none", "none", "block"]} to="/" link={<Logo />} />
					<NavItem display={["none", "none", "block"]} to="/top" link="Top Stories" />
					<NavItem display={["none", "none", "block"]} to="/show" link="Show Stories" />
					<NavItem display={["none", "none", "block"]} to="/job" link="Job Stories" />
					<MobileMenu />
				</UnorderedList>
			</Box>
		</Flex>
	);
}

export default Navbar;