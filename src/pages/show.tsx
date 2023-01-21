import { useEffect } from "react";
import { fetchShowDetails, selectShows } from "@/features/show/showsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { loadMore } from "@/features/show/showsSlice";

function show() {
	const dispatch = useAppDispatch();

	const { details, status, error, page, limit } = useAppSelector(selectShows);

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchShowDetails({ page, limit }));
		}
	}, [dispatch, status, page, limit]);

	return (
		<>
			{error && <h2>something is wrong</h2>}
			{details.map((story, index) => (
				<div key={story.id}>
					{index + 1} - {story.title} by {story.by}
				</div>
			))}
			{status === "loading" && <h2>loading</h2>}
			<button type="button" onClick={() => dispatch(loadMore())}>
				Load more
			</button>
		</>
	);
}

export default show;
