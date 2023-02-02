import { Flex, Text, Divider, Heading } from "@chakra-ui/react";
import { IItem } from "hacker-news-api-types";
import { timeAgo } from "@/utils/timeFormater";

function StoryBlock({ title, by, time, score, descendants }: IItem) {
	return (
		<Flex
			as="section"
			border="1px"
			borderColor="orange.700"
			borderRadius="md"
			p="2"
			flexDir="column"
			gap="2"
		>
			<Heading as="h3" fontSize="2xl">
				{title}
			</Heading>
			<Divider />
			<Text>
				{score} points | by: {by} | Published {timeAgo(time as number)} ago |{" "}
				{descendants} comments
			</Text>
		</Flex>
	);
}

export default StoryBlock;
