import Head from "next/head";
import { useEffect } from "react";
import { fetchJobStories, selectJobs } from "@/features/jobsSlice";
import { fetchShowStories, selectShows } from "@/features/showsSlice";
import { fetchTopStories, selectTops } from "@/features/topsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import MainContainer from "@/components/MainContainer";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import RecentBlock from "@/components/RecentBlock";
import { Flex } from "@chakra-ui/react";

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
			<Head>
				<title>Hacker News - NextJs</title>
				<meta
					name="description"
					content="This is a Hacker News clone - NextJs version"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
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
