import { Flex } from "@chakra-ui/react";
import { useFetchAllStories } from "../hooks/useFetchAllStories";
import { headTitle } from "../utils/PagesHelpers";
import MetaHead from "@/components/MetaHead";
import MainContainer from "@/components/MainContainer";
import PageTitle from "@/components/PageTitle";
import RecentBlock from "@/components/RecentBlock";

export default function Home() {
	const { tops, topLoading, shows, showLoading, jobs, jobLoading } = useFetchAllStories();

	const title = headTitle("Home");
	const description =
		"A Hacker News clone with Next.js, Redux Toolkit, and Chakra UI that can read 8 latest recent stories for top, show and job stories.";

	return (
		<>
			<MetaHead title={title} description={description} />
			<MainContainer>
				<PageTitle pageTitle="Recent Stories!" />
				<Flex flexDir="column" gap="6">
					<RecentBlock stories={tops} href="top" isLoading={topLoading} />
					<RecentBlock stories={shows} href="show" isLoading={showLoading} />
					<RecentBlock stories={jobs} href="job" isLoading={jobLoading} />
				</Flex>
			</MainContainer>
		</>
	);
}
