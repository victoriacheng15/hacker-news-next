import { Link, Heading, Flex } from "@chakra-ui/react";
import { HiOutlineExternalLink } from "react-icons/hi";

type StoryTitleProps = Pick<Story, "title" | "url">;

function StoryTitle({ url, title }: StoryTitleProps) {
	return (
		<Link href={url} isExternal>
			<Heading as="h3" fontSize={["xl", "2xl"]}>
				<Flex as="span" alignItems="center" gap="2">
					{title} <HiOutlineExternalLink />
				</Flex>
			</Heading>
		</Link>
	);
}

export default StoryTitle;
