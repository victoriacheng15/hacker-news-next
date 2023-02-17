import { useEffect } from "react";
import { useFetchAllStories } from "./useFetchAllStories";

export function useFetchTop() {
	const {
		tops,
		topLoading,
		topError,
		topPage,
		topLimit,
		dispatchTopStories,
		dispatchMoreTop,
	} = useFetchAllStories();

	useEffect(() => {
		if (topLoading === "idle") {
			dispatchTopStories();
		}
	}, [dispatchTopStories, topLoading, topPage, topLimit]);

	return {
		tops,
		topLoading,
		topError,
		dispatchMoreTop,
	};
}
