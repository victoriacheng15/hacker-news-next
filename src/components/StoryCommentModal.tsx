import {
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	Text,
	Divider,
	Button,
} from "@chakra-ui/react";
import { useAppSelector } from "@/hooks";
import { selectTops } from "@/features/topsSlice";
import CommentBlock from "./CommentBlock";
import Loading from "./LoadingInfo/Loading";
import StoryTitle from "./StoryBlock/StoryTitle";
import { useAppDispatch } from "@/hooks";
import { loadMoreComments } from "@/features/topsSlice";
import LoadMoreBtn from "./LoadMoreBtn";

function StoryCommentModal({ id }: { id: number }) {
	const dispatch = useAppDispatch();

	const {
		details,
		comments,
		commentLoading,
		commentPage,
		commentLimit,
	} = useAppSelector(selectTops);

	const currentStory: any = details.find(({ id }) => id === id);
	const currentComment = comments[id];

	return (
		<ModalContent>
			<ModalHeader>
				<StoryTitle title={currentStory.title} url={currentStory.url} />
				<Text
					fontSize="lg"
					lineHeight="1.75"
					dangerouslySetInnerHTML={{ __html: currentStory.text }}
				/>
				<Divider mt="4" />
			</ModalHeader>
			<ModalCloseButton />
			<ModalBody>
				{currentComment?.children
					.slice(commentPage, commentLimit)
					.map((comment) => (
						<CommentBlock key={comment.id} {...comment} />
					))}
				{commentLoading && <Loading />}
				<LoadMoreBtn
					btnText="Load More comments"
					onClick={() => dispatch(loadMoreComments())}
				/>
			</ModalBody>
		</ModalContent>
	);
}

export default StoryCommentModal;
