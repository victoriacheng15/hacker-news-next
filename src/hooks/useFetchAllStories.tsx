import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
	fetchTopStories,
	selectTops,
	loadMoreStories as loadMoreTop,
} from "@/features/topsSlice";
import {
	fetchShowStories,
	selectShows,
	loadMoreStories as loadMoreShow,
} from "@/features/showsSlice";
import {
	fetchJobStories,
	selectJobs,
	loadMoreStories as loadMoreJob,
} from "@/features/jobsSlice";

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

	const allLoadingConditions =
		topLoading === "idle" && showLoading === "idle" && jobLoading === "idle";

	const standardPagination = {
		page: 0,
		limit: 20,
	};

	useEffect(() => {
		if (allLoadingConditions) {
			dispatch(fetchTopStories(standardPagination));
			dispatch(fetchShowStories(standardPagination));
			dispatch(fetchJobStories(standardPagination));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch, allLoadingConditions]);

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
