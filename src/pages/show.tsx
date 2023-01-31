// /* eslint-disable react/no-children-prop */
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
// import { fetchShowDetails, selectShows } from "@/features/showsSlice";
// import { loadMore } from "@/features/showsSlice";
import MainContainer from "@/components/MainContainer";
import LoadMoreBtn from "@/components/LoadMoreBtn";
import LoadingInfo from "@/components/LoadingInfo";
// import Story from "@/components/Story";

function show() {
	const dispatch = useAppDispatch();

	// const { details, status, error, page, limit } = useAppSelector(selectShows);

	// useEffect(() => {
	// 	if (status === "idle") {
	// 		dispatch(fetchShowDetails({ page, limit }));
	// 	}
	// }, [dispatch, status, page, limit]);

	return (
		<MainContainer>
      <h2>Show stories</h2>
			{/* {error && <h2>something is wrong</h2>}
			{(details as Story[]).map(
				({ id, title, author, children, url, text, created_at, points }) => (
					<Story
						key={id}
						id={id}
						title={title}
						author={author}
						children={children}
						url={url}
						text={text}
						created_at={created_at}
						points={points}
					/>
				),
			)}
			<LoadingInfo status={status} error={error} />
			{status === "succeeded" && (
				<LoadMoreBtn onClick={() => dispatch(loadMore())} />
			)} */}
		</MainContainer>
	);
}

export default show;
