import {
  Divider,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectComments } from "@/features/commentsSlice";
import { loadMoreComments } from "@/features/commentsSlice";
import ModalTitle from "./ModalTitle";
import ModalText from "./ModalText";
import Loading from "../LoadingInfo/Loading";
import LoadMoreBtn from "../LoadMoreBtn";
import CommentBlock from "../CommentBlock";

function StoryCommentModal({ id }: { id: number }) {
  const dispatch = useAppDispatch();

  const { comments, commentLoading, commentPage, commentLimit } =
    useAppSelector(selectComments);
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
        <ModalTitle url={currentComment.url} title={currentComment.title} />
        <ModalText text={currentComment.text} />
        <Divider mt="4" />
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        {currentComment?.children
          .slice(commentPage, commentLimit)
          .map((comment) => <CommentBlock key={comment.id} {...comment} />)}
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
