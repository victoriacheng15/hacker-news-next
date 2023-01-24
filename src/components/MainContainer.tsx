import { Flex } from "@chakra-ui/react";

function MainContainer({ children }: { children: React.ReactNode }) {
	return (
		<Flex
			as="main"
			py="8"
			maxW={1000}
			mx="auto"
			w="90%"
			flexDir="column"
			gap="2"
		>
			{children}
		</Flex>
	);
}

export default MainContainer;
