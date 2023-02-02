import MainContainer from "@/components/MainContainer";
import { Box, Button, Divider, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Loading from "@/components/LoadingInfo/Loading";
import { selectTops, loadMoreComments } from "@/features/topsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import StoryTitle from "@/components/StoryBlock/StoryTitle";
import { timeAgo } from "@/utils/timeFormater";
import CommentBlock from "@/components/CommentBlock";

function StoryDetails() {
	const router = useRouter();
	const dispatch = useAppDispatch();

	const { id } = router.query;
	const { comments, commentLoadng, commentError, commentPage, commentLimit } =
		useAppSelector(selectTops);
	console.log({ comments, commentLoadng, commentError });

	// TODO: revise LoadingInfo component for comments
	if (commentLoadng) {
		return (
			<MainContainer>
				<Loading />
			</MainContainer>
		);
	}
	if (commentError) return <h2>{commentError}</h2>;

	const currentComment = comments[Number(id)];

	return (
		<MainContainer>
			<StoryTitle title={currentComment.title} url={currentComment.url} />
			{currentComment.text && (
				<Text dangerouslySetInnerHTML={{ __html: currentComment.text }} />
			)}
			<Text fontWeight="semibold">
				{currentComment.author} | Published{" "}
				{timeAgo(currentComment.created_at_i)} ago
			</Text>
			<Divider my="2" />
			{currentComment.children
				.slice(commentPage, commentLimit)
				.map((comment) => (
					<CommentBlock key={comment.id} {...comment} />
				))}
			<Button onClick={() => dispatch(loadMoreComments())}>
				Load more Comments
			</Button>
		</MainContainer>
	);
}

export default StoryDetails;
