import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
	fetchTopStories,
	selectTopStories,
	selectTopStoriesError,
	selectTopStoriesStatus,
} from "@/features/top/topStorisSlice";

function top() {
	const dispatch = useAppDispatch()
	const topStories = useAppSelector(selectTopStories);
	const status = useAppSelector(selectTopStoriesStatus);
	const error = useAppSelector(selectTopStoriesError);

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchTopStories());
		}
	}, [dispatch, status]);

	return (
		<>
			{status === "loading" && <h2>loading</h2>}
			{error && <h2>something is wrong</h2>}
			{
				topStories.map(story => (
					<div key={story}>{story}</div>
				))
			}
		</>
	);
}

export default top;
