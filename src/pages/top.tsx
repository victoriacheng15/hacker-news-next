/* eslint-disable react/no-children-prop */
import { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { fetchTopStories, selectTops } from "@/features/topsSlice";
import { loadMoreStories } from "@/features/topsSlice";
import MainContainer from "@/components/MainContainer";
import PageTitle from "@/components/PageTitle";
import StoryBlock from "@/components/StoryBlock";
import LoadMoreBtn from "@/components/LoadMoreBtn";
import LoadingInfo from "@/components/LoadingInfo";

function top() {
	const dispatch = useAppDispatch();
	const { details, loadingStatus, error, page, limit } =
		useAppSelector(selectTops);

	useEffect(() => {
		if (loadingStatus === "idle") {
			dispatch(fetchTopStories({ page, limit }));
		}
	}, [dispatch, loadingStatus, page, limit]);

	return (
		<MainContainer>
			<PageTitle pageTitle="Top Stories" />
			<Flex as="section" flexDir="column" gap="6">
				{details.map((detail) => (
					<StoryBlock
						key={detail.id}
						id={detail.id}
						title={detail.title}
						by={detail.by}
						time={detail.time}
						score={detail.score}
						descendants={detail.descendants}
					/>
				))}
			</Flex>
			<LoadingInfo status={loadingStatus} error={error} />
			<LoadMoreBtn
				btnText="Load More Stories!"
				onClick={() => dispatch(loadMoreStories())}
			/>
		</MainContainer>
	);
}

export default top;
