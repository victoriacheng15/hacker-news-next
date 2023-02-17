import { Divider, Modal, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { IItem } from "hacker-news-api-types";
import { useAppDispatch } from "@/hooks";
import { fetchTopComments } from "@/features/topsSlice";
import StoryBox from "./StoryBox";
import StoryTitle from "./StoryTitle";
import TextStats from "./TextStats";
import StoryCommentModal from "../StoryCommentModal";

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
				<StoryBox data-id={id}>
					<StoryTitle title={title} url={url} type={type} />
					<Divider />
					<TextStats
						by={by}
						score={score}
						time={time}
						descendants={descendants}
						type={type}
					/>
				</StoryBox>
			) : (
				<StoryBox data-id={id} onClick={modalAndDispatch}>
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
				</StoryBox>
			)}
		</>
	);
}

export default StoryBlock;
