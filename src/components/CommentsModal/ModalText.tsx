import { Text } from "@chakra-ui/react";

function ModalText({ text }: { text: string }) {
	return (
		<Text
			fontSize="lg"
			lineHeight="1.75"
			fontWeight="normal"
			// rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: text }}
		/>
	);
}

export default ModalText;
