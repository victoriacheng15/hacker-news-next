import { useEffect } from "react";
import { useFetchAllStories } from "./useFetchAllStories";

export function useFetchShow() {
	const {
		shows,
		showLoading,
		showError,
		showPage,
		showLimit,
		dispatchShowStories,
		dispatchMoreShow,
	} = useFetchAllStories();

	useEffect(() => {
		if (showLoading === "idle") {
			dispatchShowStories();
		}
	}, [dispatchShowStories, showLoading, showPage, showLimit]);

	return {
		shows,
		showLoading,
		showError,
		dispatchMoreShow,
	};
}
