import {
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	Text,
	Divider,
} from "@chakra-ui/react";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { selectTops } from "@/features/topsSlice";
import { loadMoreComments } from "@/features/topsSlice";
import CommentBlock from "./CommentBlock";
import Loading from "./LoadingInfo/Loading";
import StoryTitle from "./StoryBlock/StoryTitle";
import LoadMoreBtn from "./LoadMoreBtn";

function StoryCommentModal({ id }: { id: number }) {
	const dispatch = useAppDispatch();

	const { comments, commentLoading, commentPage, commentLimit } =
		useAppSelector(selectTops);
	const currentComment = comments[id];

	if (commentLoading) {
		return (
			<ModalContent>
				<Loading />
			</ModalContent>
		);
	}

	return (
		<ModalContent>
			<ModalHeader>
				<StoryTitle title={currentComment.title} url={currentComment.url} />
				<Text
					fontSize="lg"
					lineHeight="1.75"
					dangerouslySetInnerHTML={{ __html: currentComment.text }}
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
				{currentComment?.children.length > commentLimit && (
					<LoadMoreBtn
						btnText="Load More comments"
						onClick={() => dispatch(loadMoreComments())}
					/>
				)}
			</ModalBody>
		</ModalContent>
	);
}

export default StoryCommentModal;
