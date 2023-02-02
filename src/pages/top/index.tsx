/* eslint-disable react/no-children-prop */
import { useEffect } from "react";
import Link from "next/link";
import { Flex } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { fetchTopStories, selectTops, fetchTopComments } from "@/features/topsSlice";
import { loadMoreStories } from "@/features/topsSlice";
import { slug } from "@/utils/helpers";
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
			<Flex flexDir="column" gap="4">
				{details.map((detail) => (
					<Link
						data-id={detail.id}
						key={detail.id}
						href={`/top/${detail.id}?title=${slug(detail.title)}`}
						onClick={() => dispatch(fetchTopComments(detail.id))}
					>
						<StoryBlock
							id={detail.id}
							title={detail.title}
							by={detail.by}
							time={detail.time}
							score={detail.score}
							descendants={detail.descendants}
						/>
					</Link>
				))}
			</Flex>
			<LoadingInfo status={loadingStatus} error={error} />
			<LoadMoreBtn onClick={() => dispatch(loadMoreStories())} />
		</MainContainer>
	);
}

export default top;
