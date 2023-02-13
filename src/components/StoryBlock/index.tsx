import {
	Flex,
	Text,
	Divider,
	Heading,
	Modal,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import { IItem } from "hacker-news-api-types";
import { useAppDispatch } from "@/hooks";
import { fetchTopComments } from "@/features/topsSlice";
import { timeAgo } from "@/utils/timeAgo";
import StoryCommentModal from "../StoryCommentModal";
import StoryTitle from "./StoryTitle";

function StoryBlock({ title, by, time, score, descendants, id }: IItem) {
	const dispatch = useAppDispatch();
	const { isOpen, onOpen, onClose } = useDisclosure();

	function modalAndDispatch() {
		onOpen();
		dispatch(fetchTopComments(id));
	}

	return (
		<Flex
			data-id={id}
			as="section"
			p="3"
			flexDir="column"
			gap="2"
			cursor="pointer"
			bg="orange.50"
			aria-label="open modal"
			boxShadow="lg"
			onClick={modalAndDispatch}
		>
			<Heading as="h3" fontSize={["lg", "xl", "2xl"]} textAlign="left">
				{title}
			</Heading>
			<Divider />
			<Flex>
				<Text fontSize={["sm", "md", "lg"]} display="flex">
					{score} points | by: {by} | Published {timeAgo(time as number)} ago |{" "}
					{descendants} comments
				</Text>
			</Flex>
			<Modal
				size="4xl"
				isOpen={isOpen}
				onClose={onClose}
				blockScrollOnMount={true}
				motionPreset="slideInBottom"
			>
				<ModalOverlay />
				<StoryCommentModal id={id} />
			</Modal>
		</Flex>
	);
}

export default StoryBlock;
