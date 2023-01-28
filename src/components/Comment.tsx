import { Box, Divider, Text } from "@chakra-ui/react";
import { timeAgo } from "./timeFormater";

function Comment({ author, created_at, children, text }: StoryComment) {
	return (
		<Box as="section" bg="orange.100" p="2">
			<Text p="1" textDecoration="underline">
				{author || "no auther"} | {timeAgo(created_at)}
			</Text>
			<Text
				fontSize="lg"
				fontWeight="medium"
				p="1"
				dangerouslySetInnerHTML={{ __html: text }}
			></Text>
			{children?.map((comment) => (
				<Box key={comment.id} pl="4">
					<Comment {...comment} />
				</Box>
			))}
		</Box>
	);
}

export default Comment;
