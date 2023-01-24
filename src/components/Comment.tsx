import { Box, Heading, Text } from "@chakra-ui/react";
// import { timeAgo } from "./timeFormater";

function Comment(comment: CommentProps) {

  return (
		<Box>
			<Text>
				{comment.by || "not fetch"} | {comment.time || "time is not fetched yet"}
			</Text>
			<Text>{comment.text}</Text>
			<Heading fontSize="lg">
				more sub comments: {comment?.kids?.map((id) => `${id}, `) || "no more comments"}
			</Heading>
			{comment?.kids?.map((comment) => (
				<Box key={comment.id} pl="8">
					<Comment {...comment} />
				</Box>
			))}
		</Box>
	);
}

export default Comment;
