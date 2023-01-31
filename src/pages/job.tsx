import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import MainContainer from "@/components/MainContainer";
// import { fetchJobDetails, selectJobs } from "@/features/jobsSlice";
// import { loadMore } from "@/features/jobsSlice";

function job() {
	const dispatch = useAppDispatch();

	// const { details, status, error, page, limit } = useAppSelector(selectJobs);

	// useEffect(() => {
	// 	if (status === "idle") {
	// 		dispatch(fetchJobDetails({ page, limit }));
	// 	}
	// }, [dispatch, status, page, limit]);

	return (
		<MainContainer>
      <h2>job story</h2>
			{/* {error && <h2>something is wrong</h2>}
			{details.map((story, index) => (
				<div key={story.id}>
					{index + 1} - {story.title} by {story.author}
				</div>
			))}
			{status === "loading" && <h2>loading</h2>}
			<button type="button" onClick={() => dispatch(loadMore())}>
				Load more
			</button> */}
		</MainContainer>
	);
}

export default job;
