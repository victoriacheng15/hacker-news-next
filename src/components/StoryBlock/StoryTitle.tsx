import { Link, Heading, Flex } from "@chakra-ui/react";
import { HiOutlineExternalLink } from "react-icons/hi";

function StoryTitle({
	url,
	title,
	type,
}: { url?: string; title?: string; type?: string }) {
	return (
		<>
			{type === "job" ? (
				<Link href={url} isExternal>
					<Heading as="h3" fontSize={["lg", "xl", "2xl"]}>
						<Flex as="span" alignItems="center" gap="2">
							{title} <HiOutlineExternalLink />
						</Flex>
					</Heading>
				</Link>
			) : (
				<Heading as="h3" fontSize={["lg", "xl", "2xl"]}>
					<Flex as="span" alignItems="center" gap="2">
						{title}
					</Flex>
				</Heading>
			)}
		</>
	);
}

export default StoryTitle;
