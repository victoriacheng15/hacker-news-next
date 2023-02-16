import {
	Flex,
	Divider,
	Modal,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import { IItem } from "hacker-news-api-types";
import { useAppDispatch } from "@/hooks";
import { fetchTopComments } from "@/features/topsSlice";
import StoryCommentModal from "../StoryCommentModal";
import StoryTitle from "./StoryTitle";
import TextStats from "./TextStats";

function StoryBlock({
	title,
	by,
	time,
	score,
	descendants,
	id,
	type,
	url,
}: IItem) {
	const dispatch = useAppDispatch();
	const { isOpen, onOpen, onClose } = useDisclosure();

	function modalAndDispatch() {
		onOpen();
		dispatch(fetchTopComments(id));
	}

	return (
		<>
			{type === "job" ? (
				<Flex
					data-id={id}
					as="article"
					p="4"
					flexDir="column"
					gap="2"
					cursor="pointer"
					bg="orange.100"
					boxShadow="lg"
					_hover={{
						background: "orange.200"
					}}
				>
					<StoryTitle title={title} url={url} type={type} />
					<Divider />
					<TextStats
						by={by}
						score={score}
						time={time}
						descendants={descendants}
						type={type}
					/>
				</Flex>
			) : (
				<Flex
					data-id={id}
					as="article"
					p="4"
					flexDir="column"
					gap="2"
					cursor="pointer"
					bg="orange.100"
					aria-label="open modal"
					boxShadow="lg"
					_hover={{
						background: "orange.200"
					}}
					onClick={modalAndDispatch}
				>
					<StoryTitle title={title} type={type} />
					<Divider />
					<TextStats
						by={by}
						score={score}
						time={time}
						descendants={descendants}
						type={type}
					/>
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
			)}
		</>
	);
}

export default StoryBlock;
