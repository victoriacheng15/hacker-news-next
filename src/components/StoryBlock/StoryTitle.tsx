import { Link, Heading, Flex } from "@chakra-ui/react";
import { HiOutlineExternalLink } from "react-icons/hi";

function StoryTitle({ url, title }: { url: string; title: string }) {
	return (
		<Link href={url} isExternal>
			<Heading as="h3" fontSize={["xl", "3xl"]}>
				<Flex as="span" alignItems="center" gap="2">
					{title} <HiOutlineExternalLink />
				</Flex>
			</Heading>
		</Link>
	);
}

export default StoryTitle;
