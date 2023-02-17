// /* eslint-disable react/no-children-prop */
import { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { fetchShowStories, selectShows } from "@/features/showsSlice";
import { loadMoreStories } from "@/features/showsSlice";
import MetaHead from "@/components/MetaHead";
import MainContainer from "@/components/MainContainer";
import PageTitle from "@/components/PageTitle";
import StoryBlock from "@/components/StoryBlock";
import LoadMoreBtn from "@/components/LoadMoreBtn";
import LoadingInfo from "@/components/LoadingInfo";

function show() {
	const dispatch = useAppDispatch();
	const { details, loadingStatus, error, page, limit } =
		useAppSelector(selectShows);

	useEffect(() => {
		if (loadingStatus === "idle") {
			dispatch(fetchShowStories({ page, limit }));
		}
	}, [dispatch, loadingStatus, page, limit]);

	return (
		<>
		<MetaHead page="Show" description="All the show stories!" />
		<MainContainer>
			<PageTitle pageTitle="Show Stories" />
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
		</>
	);
}

export default show;
