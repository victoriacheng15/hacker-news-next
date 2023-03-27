import NextLink from "next/link";
import { Box, Flex, Heading, Link, Skeleton } from "@chakra-ui/react";

function RecentBlock({ stories, href, isLoading }: RecentBlockProps) {
	function capitalize(str: string) {
		return str[0].toUpperCase() + href.slice(1);
	}

	return (
		<Flex
			as="section"
			bg="orange.100"
			flexDir="column"
			gap="4"
			p="4"
			boxShadow="lg"
		>
			<Heading as="h3" fontSize="3xl" color="orange.700">
				{capitalize(href)}
			</Heading>
			{stories.slice(0, 5).map(({ id, title }) => (
				<Box as="article" key={id}>
					<Heading as="h3" fontSize="lg">
						{title}
					</Heading>
				</Box>
			))}
			{isLoading !== "succeeded" &&
				[1, 2, 3, 4, 5].map((n) => <Skeleton key={n} h="24px" />)}
			<ViewMoreLink href={href} />
		</Flex>
	);
}

export default RecentBlock;

function ViewMoreLink({ href }: { href: string }) {
	return (
		<Link
			as={NextLink}
			bg="gray.100"
			w="max-content"
			p="2"
			px="3"
			fontSize="lg"
			borderRadius="lg"
			_hover={{
				background: "orange.900",
				color: "gray.100",
			}}
			href={`/${href}`}
		>
			View More
		</Link>
	);
}
