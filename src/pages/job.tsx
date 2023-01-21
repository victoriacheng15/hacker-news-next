import { useEffect } from "react";
import { fetchJobDetails, selectJobs } from "@/features/job/jobStoriesSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { loadMore } from "@/features/job/jobStoriesSlice";

function job() {
	const dispatch = useAppDispatch();

	const { details, status, error, page, limit } = useAppSelector(selectJobs);

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchJobDetails({ page, limit }));
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

export default job;
