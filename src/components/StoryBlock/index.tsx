import { Divider, Modal, ModalOverlay } from "@chakra-ui/react";
import { IItem } from "hacker-news-api-types";
import { useModel } from "../../hooks/useModal";
import StoryBox from "./StoryBox";
import StoryTitle from "./StoryTitle";
import TextStats from "./TextStats";
import CommentsModal from "../CommentsModal";

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
	const { isOpen, onClose, modalAndDispatch } = useModel();

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
				<StoryBox data-id={id} onClick={() => modalAndDispatch(id)}>
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
						<CommentsModal id={id} />
					</Modal>
				</StoryBox>
			)}
		</>
	);
}

export default StoryBlock;
