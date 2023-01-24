import { useEffect } from "react";
import { fetchTopDetails, selectTops } from "@/features/top/topsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { loadMore } from "@/features/top/topsSlice";
import MainContainer from "@/components/MainContainer";
import PageTitle from "@/components/PageTitle";
import Story from "@/components/Story";
import LoadMoreBtn from "@/components/LoadMoreBtn";
import LoadingInfo from "@/components/LoadingInfo";

function top() {
	const dispatch = useAppDispatch();

	const { details, status, error, page, limit } = useAppSelector(selectTops);

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchTopDetails({ page, limit }));
		}
	}, [dispatch, status, page, limit]);

	return (
		<MainContainer>
			<PageTitle pageTitle="Top Stories" />
			{(details as StoryProps[]).map(
				({ id, title, by, kids, url, time, score }) => (
					<Story
						key={id}
						id={id}
						title={title}
						by={by}
						kids={kids}
						url={url}
						time={time}
						score={score}
					/>
				),
			)}
			<LoadingInfo status={status} error={error} />
			{status === "succeeded" && <LoadMoreBtn onClick={() => dispatch(loadMore())} />}
		</MainContainer>
	);
}

export default top;
