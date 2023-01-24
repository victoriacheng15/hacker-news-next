import { Flex, Text, Divider } from "@chakra-ui/react";
import { useAppDispatch } from "@/hooks";
import { clearComments } from "@/features/comments/commentsSlice";
import { formatDistanceStrict, fromUnixTime } from "date-fns";
import Link from "next/link";
import StoryTitle from "./StoryTitle";

function Story({ id, title, by, kids, url, time, score }: StoryProps) {
	const dispatch = useAppDispatch();
	const today = new Date();
	const timeAgo = formatDistanceStrict(fromUnixTime(time), today);

	const query: { object: string | null } = {
		object: encodeURIComponent(JSON.stringify(kids ?? null)),
	};

	const CommentsLink = () => {
		return (
			<Link href={{ pathname: `/top/${id}`, query }} onClick={() => dispatch(clearComments())}>
				{kids?.length || 0} comments
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
			<Text>
				{score} points | by: {by} | {timeAgo} ago | <CommentsLink />
			</Text>
		</Flex>
	);
}

export default Story;
