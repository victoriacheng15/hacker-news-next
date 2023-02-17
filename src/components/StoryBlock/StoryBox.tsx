import { Flex } from "@chakra-ui/react";

function StoryBox(props: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<Flex
			as="article"
			p="4"
			flexDir="column"
			gap="2"
			cursor="pointer"
			bg="orange.100"
			boxShadow="lg"
			_hover={{
				background: "orange.200",
			}}
      {...props}
		>
			{props.children}
		</Flex>
	);
}

export default StoryBox;
