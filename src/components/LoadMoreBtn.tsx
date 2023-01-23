import { Button } from "@chakra-ui/react";

function LoadMoreBtn({ onClick }: { onClick: () => void }) {
	return (
		<Button
			size="lg"
			bg="orange.400"
			w="max-content"
			mx="auto"
			mt="4"
			onClick={onClick}
		>
			Load More Stories!
		</Button>
	);
}

export default LoadMoreBtn;
