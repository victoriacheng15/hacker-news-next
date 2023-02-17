import { Flex, Box, Text } from "@chakra-ui/react";
import { timeAgo } from "@/utils/timeAgo";

function TextStats({ by, score, time, descendants, type }: TextStatsProps) {
	return (
		<Flex>
			{type === "job" ? (
				<Text fontSize={["sm", "md"]} display="flex">
					Posted by
					<Box px="1" as="span" textDecoration="underline">
						{by}
					</Box>{" "}
					{timeAgo(time as number)} ago
				</Text>
			) : (
				<Text fontSize={["sm", "md"]} display="flex">
					{score} points | Published by
					<Box px="1" as="span" textDecoration="underline">
						{by}
					</Box>{" "}
					{timeAgo(time as number)} ago |{" "}
					{descendants ? `${descendants} comments` : "No comments yet"}
				</Text>
			)}
		</Flex>
	);
}

export default TextStats;
