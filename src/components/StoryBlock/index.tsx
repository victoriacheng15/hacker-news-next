import {
	Flex,
	Text,
	Divider,
	Heading,
	Modal,
	ModalOverlay,
	useDisclosure,
	Button,
} from "@chakra-ui/react";
import { IItem } from "hacker-news-api-types";
import { useAppDispatch } from "@/hooks";
import { fetchTopComments } from "@/features/topsSlice";
import { timeAgo } from "@/utils/timeAgo";
import StoryCommentModal from "../StoryCommentModal";

function StoryBlock({ title, by, time, score, descendants, id }: IItem) {
	const dispatch = useAppDispatch();
	const { isOpen, onOpen, onClose } = useDisclosure();

	function modalAndDispatch() {
		onOpen();
		dispatch(fetchTopComments(id));
	}

	return (
		<Button
			h="full"
			w="full"
			cursor="pointer"
			border="2px"
			bg="gray.100"
			borderColor="orange.300"
			aria-label="open modal"
			onClick={modalAndDispatch}
		>
			<Flex as="section" w="full" p="3" flexDir="column" gap="2" data-id={id}>
				<Heading as="h3" textAlign="left" fontSize="2xl">
					{title}
				</Heading>
				<Divider />
				<Flex>
					<Text>
						{score} points | by: {by} | Published {timeAgo(time as number)} ago
						| {descendants} comments
					</Text>
					<Modal
						size="6xl"
						blockScrollOnMount={true}
						isOpen={isOpen}
						onClose={onClose}
						motionPreset="slideInBottom"
					>
						<ModalOverlay />
						<StoryCommentModal id={id} />
					</Modal>
				</Flex>
			</Flex>
		</Button>
	);
}

export default StoryBlock;
