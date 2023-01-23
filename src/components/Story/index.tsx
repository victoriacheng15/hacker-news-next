import { Flex, Text, Divider } from "@chakra-ui/react";
import { formatDistanceStrict, fromUnixTime } from "date-fns";
import Link from "next/link";
import { useRouter } from "next/router";
import StoryTitle from "./StoryTitle";

function Story({ id, title, by, kids, url, time, score }: StoryProps) {
	const router = useRouter();

	const today = new Date();
	const timeAgo = formatDistanceStrict(fromUnixTime(time), today);

	function click() {
		router.push({
			pathname: `/top/${id}`,
			query: {
				data: kids,
			},
		});
	}

	const CommentsLink = () => {
		return (
			<Link href={{ pathname: `/top/${id}`, query: { data: kids } }}>
				{kids?.length || 0} comments
			</Link>
		);
	};

	// console.log(kids)
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
			<Link href={`/top/${id}`}>See more comment</Link>
		</Flex>
	);
}

export default Story;
