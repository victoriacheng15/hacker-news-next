import { useEffect } from "react";
import { fetchTopDetails, selectTops } from "@/features/top/topsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { loadMore } from "@/features/top/topsSlice";
import MainContainer from "@/components/MainContainer";
import PageTitle from "@/components/PageTitle";
import Story from "@/components/Story";

function top() {
	const dispatch = useAppDispatch();

	const { details, status, error, page, limit } = useAppSelector(selectTops);

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchTopDetails({ page, limit }));
		}
	}, [dispatch, status, page, limit]);

	return (
		<MainContainer
			status={status}
			error={error}
			onClick={() => dispatch(loadMore())}
		>
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
		</MainContainer>
	);
}

export default top;
