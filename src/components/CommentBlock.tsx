import { Box, Text } from "@chakra-ui/react";
import { timeAgo } from "@/utils/timeAgo";

type CommentBlockProps = Pick<
	Comments,
	"author" | "created_at_i" | "text" | "children"
>;

function CommentBlock(comment: CommentBlockProps) {

	return (
		<>
			{!/dead|flagged/.test(comment.text) && comment.author && (
				<Box py="2" px="4" boxShadow="lg" bg="gray.50">
					<Text pb="1" mb="2" borderBottom="1px">
						{comment.author} | Published {timeAgo(comment.created_at_i)} ago
					</Text>
					<Text
						fontSize="lg"
						lineHeight="1.5"
						dangerouslySetInnerHTML={{ __html: comment.text }}
					/>
					{comment.children?.map((comment) => (
						<Box key={comment.id} p="2" bg="gray.100">
							<CommentBlock key={comment.id} {...comment} />
						</Box>
					))}
				</Box>
			)}
		</>
	);
}

export default CommentBlock;
