import { Flex } from "@chakra-ui/react";
import { useFetchTop } from "../hooks/useFetchTop";
import { headTitle, headDescription } from "@/utils/PagesHelpers";
import MetaHead from "@/components/MetaHead";
import MainContainer from "@/components/MainContainer";
import PageTitle from "@/components/PageTitle";
import StoryBlock from "@/components/StoryBlock";
import LoadMoreBtn from "@/components/LoadMoreBtn";
import LoadingInfo from "@/components/LoadingInfo";

function top() {
	const { tops, topLoading, topError, dispatchMoreTop } = useFetchTop();

	const title = headTitle("Top");
	const description = headDescription("top");

	const topList = tops.map((top) => <StoryBlock key={top.id} {...top} />);

	return (
		<>
			<MetaHead title={title} description={description} />
			<MainContainer>
				<PageTitle pageTitle="Top Stories" />
				<Flex as="section" flexDir="column" gap="6">
					{topList}
				</Flex>
				<LoadingInfo status={topLoading} error={topError} />
				<LoadMoreBtn
					btnText="Load More Stories!"
					onClick={() => dispatchMoreTop()}
				/>
			</MainContainer>
		</>
	);
}

export default top;
