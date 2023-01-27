import { Flex, Text, Divider } from "@chakra-ui/react";
import { useAppDispatch } from "@/hooks";
import { clearComments } from "@/features/commentsSlice";
import { timeAgo } from "../timeFormater";
import Link from "next/link";
import StoryTitle from "./StoryTitle";

function Story({ id, title, author, children, url, text, created_at, points }: StoryProps) {
	const dispatch = useAppDispatch();


	const obj = {
		id,
		title,
	}

	const query: { object: string | null } = {
		object: JSON.stringify(obj),
	};

	const CommentsLink = () => {
		return (
			<Link href={{ pathname: `/top/${id}`, query }} onClick={() => dispatch(clearComments())}>
				{children?.length || 0} comments
			</Link>
		);
	};

	return (
		<Flex
			as="section"
			border="1px"
			borderColor="orange.700"
			borderRadius="md"
			p="2"
			flexDir="column"
			gap="2"
			bg="orange.100"
		>
			<StoryTitle title={title} url={url} />
			<Divider />
			<Text>{text}</Text>
			<Text>
				{points} points | by: {author} | {timeAgo(created_at)} | <CommentsLink />
			</Text>
		</Flex>
	);
}

export default Story;
