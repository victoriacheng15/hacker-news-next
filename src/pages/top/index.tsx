/* eslint-disable react/no-children-prop */
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { fetchTopDetails, selectTops } from "@/features/topsSlice";
import { loadMore } from "@/features/topsSlice";
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
			)}
		</MainContainer>
	);
}

export default top;
