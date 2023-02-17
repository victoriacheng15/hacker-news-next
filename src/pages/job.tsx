import { Flex } from "@chakra-ui/react";
import { useFetchJob } from "@/hooks/useFetchJob";
import MetaHead from "@/components/MetaHead";
import MainContainer from "@/components/MainContainer";
import PageTitle from "@/components/PageTitle";
import StoryBlock from "@/components/StoryBlock";
import LoadMoreBtn from "@/components/LoadMoreBtn";
import LoadingInfo from "@/components/LoadingInfo";

function show() {
	const { jobs, jobLoading, jobError, dispatchMoreJob } = useFetchJob();

	const jobList = jobs.map((job) => <StoryBlock key={job.id} {...job} />);

	return (
		<>
			<MetaHead
				title="Job | Hacker News Clone - Next.js"
				description="All the job stories!"
			/>
			<MainContainer>
				<PageTitle pageTitle="Job Stories" />
				<Flex as="section" flexDir="column" gap="6">
					{jobList}
				</Flex>
				<LoadingInfo status={jobLoading} error={jobError} />
				<LoadMoreBtn
					btnText="Load More Stories!"
					onClick={() => dispatchMoreJob()}
				/>
			</MainContainer>
		</>
	);
}

export default show;
