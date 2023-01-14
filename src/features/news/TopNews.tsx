import { useGetTopStoriesQuery } from "./apisSlice";

function TopNews() {
	const {
		data: topStories,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetTopStoriesQuery();

	console.log(topStories);

	return (
		<>
			<h2>top story</h2>
		</>
	);
}

export default TopNews;
