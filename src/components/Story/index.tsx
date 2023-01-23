import { Flex, Text, Divider } from "@chakra-ui/react";
import StoryTitle from "./StoryTitle";


function Story({ title, by, kids, url, time, score }: StoryProps) {
	return (
		<Flex as="section" border="1px" borderColor="orange.700" borderRadius="md" p="2" flexDir="column" gap="2" bg="orange.100">
			<StoryTitle title={title} url={url} />
			<Divider />
			<Text>
				{score} points | by: {by} | {time} | {kids?.length || 0} comments
			</Text>
		</Flex>
	);
}

export default Story;
