import { Box, Divider, Text } from "@chakra-ui/react";
import { timeAgo } from "@/utils/timeFormater";

type CommentBlockProps = Pick<
	Comments,
	"author" | "created_at_i" | "text" | "children"
>;

function CommentBlock(comment: CommentBlockProps) {
	return (
		<>
			{comment.author && (
				<>
					<Box py="2" px="4" bg="orange.100">
						<Text fontWeight="semibold" pb="1" borderBottom="1px">
							{comment.author} | Published {timeAgo(comment.created_at_i)} ago
						</Text>
						<Text
							fontSize="lg"
							lineHeight="1.75"
							dangerouslySetInnerHTML={{ __html: comment.text }}
						/>
						{comment.children?.map((comment) => (
							<Box key={comment.id} pl="4">
								<CommentBlock key={comment.id} {...comment} />
							</Box>
						))}
					</Box>
				</>
			)}
		</>
	);
}

export default CommentBlock;
