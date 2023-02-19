import { useEffect } from "react";
import { useFetchAllStories } from "./useFetchAllStories";

export function useFetchTop() {
	const {
		tops,
		topLoading,
		topError,
		topLimit,
		dispatchTopStories,
		dispatchMoreTop,
	} = useFetchAllStories();

	useEffect(() => {
		if (topLoading === "idle") {
			dispatchTopStories();
		}
	}, [dispatchTopStories, topLoading, topLimit]);

	return {
		tops,
		topLoading,
		topError,
		dispatchMoreTop,
	};
}
