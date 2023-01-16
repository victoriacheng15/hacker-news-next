import { useState } from "react";
import { Flex, IconButton, UnorderedList } from "@chakra-ui/react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import NavItem from "./NavItem";

function MobileMenu() {
	const [open, isOpen] = useState(false);

	return (
		<Flex
			as="nav"
			aria-label="mobile menu"
			display={["block", "block", "none"]}
		>
			<IconButton
				aria-label={open ? "close menu" : "open menu"}
				bg="gray.100"
				icon={open ? <AiOutlineClose /> : <HiMenuAlt3 />}
				cursor="pointer"
				onClick={() => isOpen((prevStatus) => !prevStatus)}
				zIndex="1"
			/>
			<UnorderedList
				display={open ? "flex" : "none"}
				flexDir="column"
				justifyContent="center"
				alignItems="center"
				gap="1rem"
				w="100vw"
				h="100vh"
				p="1rem"
				m="0"
				pos="fixed"
				bg="orange.400"
				opacity="0.9"
				top="0"
				right="0"
			>
				<NavItem to="/top" link="Top Stories" onClick={() => isOpen(prev => !prev)} />
				<NavItem to="/show" link="Show Stories" onClick={() => isOpen(prev => !prev)} />
				<NavItem to="/job" link="Job Stories" onClick={() => isOpen(prev => !prev)} />
			</UnorderedList>
		</Flex>
	);
}

export default MobileMenu;
