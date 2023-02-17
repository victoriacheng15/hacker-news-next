import { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { fetchJobStories, selectJobs } from "@/features/jobsSlice";
import { fetchShowStories, selectShows } from "@/features/showsSlice";
import { fetchTopStories, selectTops } from "@/features/topsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import MetaHead from "@/components/MetaHead";
import MainContainer from "@/components/MainContainer";
import PageTitle from "@/components/PageTitle";
import RecentBlock from "@/components/RecentBlock";

export default function Home() {
	const dispatch = useAppDispatch();

	const {
		details: tops,
		loadingStatus: topLoading,
		error: topError,
	} = useAppSelector(selectTops);

	const {
		details: shows,
		loadingStatus: showLoading,
		error: showError,
	} = useAppSelector(selectShows);

	const {
		details: jobs,
		loadingStatus: jobLoading,
		error: jobError,
	} = useAppSelector(selectJobs);

	useEffect(() => {
		if (
			topLoading === "idle" &&
			showLoading === "idle" &&
			jobLoading === "idle"
		) {
			dispatch(fetchTopStories({ page: 0, limit: 10 }));
			dispatch(fetchShowStories({ page: 0, limit: 10 }));
			dispatch(fetchJobStories({ page: 0, limit: 10 }));
		}
	}, [dispatch, topLoading, showLoading, jobLoading]);

	return (
		<>
			<MetaHead
				title="Home | Hacker News Clone - Next.js"
				description="A Hacker News clone with Next.js, Redux Toolkit, and Chakra UI that can read 8 latest recent stories for top, show and job stories."
			/>
			<MainContainer>
				<PageTitle pageTitle="Recent Stories!" />
				<Flex flexDir="column" gap="6">
					<RecentBlock stories={tops} href="top" />
					<RecentBlock stories={shows} href="show" />
					<RecentBlock stories={jobs} href="job" />
				</Flex>
			</MainContainer>
		</>
	);
}
