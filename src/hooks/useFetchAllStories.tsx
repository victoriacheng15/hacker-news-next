import { useEffect } from "react";
import { fetchJobStories, selectJobs } from "@/features/jobsSlice";
import { fetchShowStories, selectShows } from "@/features/showsSlice";
import { fetchTopStories, selectTops } from "@/features/topsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { loadMoreStories as loadMoreTop } from "@/features/topsSlice";
import { loadMoreStories as loadMoreShow } from "@/features/showsSlice";
import { loadMoreStories as loadMoreJob } from "@/features/jobsSlice";

export function useFetchAllStories() {
	const dispatch = useAppDispatch();

	const {
		details: tops,
		loadingStatus: topLoading,
		error: topError,
		page: topPage,
		limit: topLimit,
	} = useAppSelector(selectTops);

	const topPagination = {
		page: topPage,
		limit: topLimit,
	};

	const dispatchTopStories = () => dispatch(fetchTopStories(topPagination));
	const dispatchMoreTop = () => dispatch(loadMoreTop());

	const {
		details: shows,
		loadingStatus: showLoading,
		error: showError,
		page: showPage,
		limit: showLimit,
	} = useAppSelector(selectShows);

	const showPagination = {
		page: showPage,
		limit: showLimit,
	};

	const dispatchShowStories = () => dispatch(fetchShowStories(showPagination));
	const dispatchMoreShow = () => dispatch(loadMoreShow());

	const {
		details: jobs,
		loadingStatus: jobLoading,
		error: jobError,
		page: jobPage,
		limit: jobLimit,
	} = useAppSelector(selectJobs);

	const jobPagination = {
		page: jobPage,
		limit: jobLimit,
	};

	const dispatchJobStories = () => dispatch(fetchJobStories(jobPagination));
	const dispatchMoreJob = () => dispatch(loadMoreJob());

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
		topError,
		topPage,
		topLimit,
		dispatchTopStories,
		dispatchMoreTop,
		shows,
		showLoading,
		showError,
		showPage,
		showLimit,
		dispatchShowStories,
		dispatchMoreShow,
		jobs,
		jobLoading,
		jobError,
		jobPage,
		jobLimit,
		dispatchJobStories,
		dispatchMoreJob,
	};
}
