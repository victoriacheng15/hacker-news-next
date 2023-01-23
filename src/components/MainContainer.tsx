import { Flex } from "@chakra-ui/react";
import Loading from "./Loading";
import LoadMoreBtn from "./LoadMoreBtn";

function MainContainer({
	children,
	status,
	error,
	onClick,
}: MainContainerProps) {
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
			{error && <h2>something is wrong</h2>}
			{status === "loading" && <Loading />}
			{status === "succeeded" && <LoadMoreBtn onClick={onClick} />}
		</Flex>
	);
}

export default MainContainer;
