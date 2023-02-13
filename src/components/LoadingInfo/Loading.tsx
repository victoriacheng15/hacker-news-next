import { Box, Spinner } from "@chakra-ui/react";

function Loading() {
	return (
		<Box w="100" mx="auto" py="6">
			<Spinner
				size="xl"
				color="orange.400"
				thickness="4px"
				emptyColor="gray.100"
			/>
		</Box>
	);
}

export default Loading;
