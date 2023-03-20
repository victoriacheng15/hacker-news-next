import { Flex, Text, Link } from "@chakra-ui/react";
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
		<Link
			isExternal
			href="https://github.com/victoriacheng15/hacker-news-next#readme"
			aria-label="Github"
		>
			<SiGithub />
		</Link>
	);
}

function Linkedin() {
	return (
		<Link
			isExternal
			href="https://www.linkedin.com/in/victoriacheng15/"
			aria-label="LinkedIn"
		>
			<SiLinkedin />
		</Link>
	);
}

function Twitter() {
	return (
		<Link
			isExternal
			href="https://twitter.com/viktoriacheng15"
			aria-label="Twitter"
		>
			<SiTwitter />
		</Link>
	);
}
