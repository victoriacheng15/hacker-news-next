// /* eslint-disable react/no-children-prop */
import { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { fetchJobStories, selectJobs } from "@/features/jobsSlice";
import { loadMoreStories } from "@/features/jobsSlice";
import MetaHead from "@/components/MetaHead";
import MainContainer from "@/components/MainContainer";
import PageTitle from "@/components/PageTitle";
import StoryBlock from "@/components/StoryBlock";
import LoadMoreBtn from "@/components/LoadMoreBtn";
import LoadingInfo from "@/components/LoadingInfo";

function show() {
	const dispatch = useAppDispatch();
	const { details, loadingStatus, error, page, limit } =
		useAppSelector(selectJobs);

	useEffect(() => {
		if (loadingStatus === "idle") {
			dispatch(fetchJobStories({ page, limit }));
		}
	}, [dispatch, loadingStatus, page, limit]);

	return (
		<>
			<MetaHead
				title="Job | Hacker News Clone - Next.js"
				description="All the job stories!"
			/>
			<MainContainer>
				<PageTitle pageTitle="Job Stories" />
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
							type={detail.type}
							url={detail.url}
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
