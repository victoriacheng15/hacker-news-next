import { Button } from "@chakra-ui/react";

function LoadMoreBtn({
	btnText,
	onClick,
}: { btnText: string; onClick: () => void }) {
	return (
		<Button
			size="lg"
			bg="orange.400"
			w="max-content"
			mx="auto"
			mt="4"
			_hover={{
				background: "orange.200",
			}}
			onClick={onClick}
		>
			{btnText}
		</Button>
	);
}

export default LoadMoreBtn;
