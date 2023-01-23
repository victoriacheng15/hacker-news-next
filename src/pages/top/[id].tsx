import { useRouter } from "next/router";
import axios from "axios";

function Comments() {
	const router = useRouter();
	const { id, kids } = router.query;

	console.log({ kids });

	return (
		<div>
			<h1>Comments</h1>
			<p>{id}</p>
		</div>
	);
}

export default Comments;

// export async function getServerSideProps() {
// 	const router = useRouter();
// 	const { kids } = router.query;
// 	const promises = kids.map(async (commentId: number) => {
// 		const res = await axios.get(
// 			`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`,
// 		);
// 		return res.data;
// 	});

// 	const comments = await Promise.all(promises);

// 	return {
// 		props: {
// 			comments,
// 		},
// 	};
// }
