import { useEffect } from "react";
import { useFetchAllStories } from "./useFetchAllStories";

export function useFetchJob() {
	const {
		jobs,
		jobLoading,
		jobError,
		jobLimit,
		dispatchJobStories,
		dispatchMoreJob,
	} = useFetchAllStories();

	useEffect(() => {
		if (jobLoading === "idle") {
			dispatchJobStories();
		}
	}, [dispatchJobStories, jobLoading, jobLimit]);

	return {
		jobs,
		jobLoading,
		jobError,
		dispatchMoreJob,
	};
}
