import { Box, Text } from "@chakra-ui/react";
import { timeAgo } from "./timeFormater";

function Comment({ author, created_at, children, text }: StoryComment) {
	// const test = orange.100;
	return (
		<Box as="section"bg="orange.100" p="1" pl="0">
			<Text>
				{author || "no auther"} | {timeAgo(created_at)}
			</Text>
			<Text>{text}</Text>
			{children?.map((comment) => (
				<Box key={comment.id} pl="8" bg="orange.200">
					<Comment {...comment} />
				</Box>
			))}
		</Box>
	);
}

export default Comment;
