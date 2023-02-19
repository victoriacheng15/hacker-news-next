import {
	Divider,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
} from "@chakra-ui/react";
import { useFetchComments } from "@/hooks/useFetchComments";
import ModalTitle from "./ModalTitle";
import ModalText from "./ModalText";
import Loading from "../LoadingInfo/Loading";
import CommentBlock from "./CommentBlock";
import LoadMoreBtn from "../LoadMoreBtn";

function StoryCommentModal({ id }: { id: number }) {
	const {
		comments,
		commentLoading,
		commentPage,
		commentLimit,
		dispatchLoadMoreComments,
	} = useFetchComments();

	const currentComment = comments[id];

	const commentsList = currentComment?.children
		.slice(commentPage, commentLimit)
		.map((comment) => <CommentBlock key={comment.id} {...comment} />);

	const moreComments = currentComment?.children.length > commentLimit && (
		<LoadMoreBtn
			btnText="Load More comments"
			onClick={() => dispatchLoadMoreComments()}
		/>
	);

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
				<ModalTitle url={currentComment.url} title={currentComment.title} />
				<ModalText text={currentComment.text} />
				<Divider mt="4" />
			</ModalHeader>
			<ModalCloseButton />
			<ModalBody>
				{commentsList}
				{moreComments}
			</ModalBody>
		</ModalContent>
	);
}

export default StoryCommentModal;
