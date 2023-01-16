import { Text } from "@chakra-ui/react";
import Link from "next/link";

function Logo() {
	return (
		<Text as="h1" fontSize={["2xl", "3xl", "4xl"]} fontWeight="bold">
			<Link href="/">Hacker News</Link>
		</Text>
	);
}

export default Logo;
