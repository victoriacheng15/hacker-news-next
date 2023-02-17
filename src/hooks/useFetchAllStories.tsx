import { useEffect } from "react";
import { fetchJobStories, selectJobs } from "@/features/jobsSlice";
import { fetchShowStories, selectShows } from "@/features/showsSlice";
import { fetchTopStories, selectTops } from "@/features/topsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { loadMoreStories } from "@/features/topsSlice";

export function useFetchAllStories() {
	const dispatch = useAppDispatch();

	const { details: tops, loadingStatus: topLoading } =
		useAppSelector(selectTops);
	const { details: shows, loadingStatus: showLoading } =
		useAppSelector(selectShows);
	const { details: jobs, loadingStatus: jobLoading } =
		useAppSelector(selectJobs);

	const dispatchMoreTopStories = () => {
		dispatch(loadMoreStories());
	}

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
	}, [dispatch, jobLoading, showLoading, topLoading]);

	return {
		tops,
		topLoading,
		dispatchMoreTopStories,
		shows,
		showLoading,
		jobs,
		jobLoading,
	};
}
