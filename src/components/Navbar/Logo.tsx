import { Text } from "@chakra-ui/react";
import Link from "next/link";

function Logo() {
	return (
		<Link href="/">
			<Text as="h1" fontSize={["2xl", "3xl", "4xl"]} fontWeight="bold">
				Hacker News
			</Text>
		</Link>
	);
}

export default Logo;
