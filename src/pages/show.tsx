import { Flex } from "@chakra-ui/react";
import { useFetchShow } from "../hooks/useFetchShow";
import { headTitle, headDescription } from "@/utils/PagesHelpers";
import MetaHead from "@/components/MetaHead";
import MainContainer from "@/components/MainContainer";
import PageTitle from "@/components/PageTitle";
import StoryBlock from "@/components/StoryBlock";
import LoadMoreBtn from "@/components/LoadMoreBtn";
import LoadingInfo from "@/components/LoadingInfo";

function show() {
	const { shows, showLoading, showError, dispatchMoreShow } = useFetchShow();

	const title = headTitle("Show");
	const description = headDescription("show");

	const showList = shows.map((show) => <StoryBlock key={show.id} {...show} />);

	return (
		<>
			<MetaHead title={title} description={description} />
			<MainContainer>
				<PageTitle pageTitle="Show Stories" />
				<Flex as="section" flexDir="column" gap="6">
					{showList}
				</Flex>
				<LoadingInfo status={showLoading} error={showError} />
				<LoadMoreBtn
					btnText="Load More Stories!"
					onClick={() => dispatchMoreShow()}
				/>
			</MainContainer>
		</>
	);
}

export default show;
