import { Flex, Text } from "@chakra-ui/react";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";

function Footer() {
	return (
		<Flex as="footer" py="2" justifyContent="center" alignItems="center">
			<Text display="flex" gap="2" alignItems="center">
				Coded by Victoria Cheng - <Github /> | <Linkedin /> | <Twitter />
			</Text>
		</Flex>
	);
}

export default Footer;

function Github() {
	return (
		<a
			href="https://github.com/victoriacheng15/hacker-news-next#readme"
			target="_blank"
			rel="noopener noreferrer"
		>
			<SiGithub />
		</a>
	);
}

function Linkedin() {
	return (
		<a
			href="https://www.linkedin.com/in/victoriacheng15/"
			target="_blank"
			rel="noopener noreferrer"
		>
			<SiLinkedin />
		</a>
	);
}

function Twitter() {
	return (
		<a
			href="https://twitter.com/viktoriacheng15"
			target="_blank"
			rel="noopener noreferrer"
		>
			<SiTwitter />
		</a>
	);
}
