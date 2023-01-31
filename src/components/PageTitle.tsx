import { Heading } from "@chakra-ui/react";

function PageTitle({ pageTitle }: { pageTitle: string }) {
	return (
		<Heading color="orange.700" mb="6">
			{pageTitle}
		</Heading>
	);
}

export default PageTitle;
