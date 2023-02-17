import { Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

function Logo() {
	return (
		<Link
			as={NextLink}
			href="/"
			_hover={{
				textDecoration: "none",
			}}
		>
			<Text
				as="h1"
				fontSize={["2xl", "3xl", "4xl"]}
				fontWeight="bold"
				py="2"
				px="3"
				_hover={{
					color: "orange.100",
					borderRadius: "lg",
					textDecoration: "wavy",
				}}
			>
				Hacker News
			</Text>
		</Link>
	);
}

export default Logo;
