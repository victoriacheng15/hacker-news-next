import { useEffect } from "react";
import {
	fetchComments,
	selectComments,
} from "@/features/comments/commentsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useRouter } from "next/router";
import MainContainer from "@/components/MainContainer";
import LoadingInfo from "@/components/LoadingInfo";
import Comment from "@/components/Comment";

function Comments() {
	const router = useRouter();
	const dispatch = useAppDispatch();

	const { object } = router.query;
	// add condition check for if there is no comment
	const res = JSON.parse(object as string);
	console.log(res)
	const commentIds = res.kids;
	const title = res.title
	
	const { comments, status, error } = useAppSelector(selectComments);
	console.log({commentIds, status, error});

	useEffect(() => {
		if (status === "idle" && commentIds) {
			dispatch(fetchComments(commentIds));
		}
	}, [dispatch, status, commentIds]);

	return (
		<MainContainer>
			<h1>Comments</h1>
			<p>{title}</p>
			{commentIds && comments.map((comment) => (
				<Comment key={comment.id} {...comment} />
			)) || "no comments"}
			<LoadingInfo status={status} error={error} />
		</MainContainer>
	);
}

export default Comments;
