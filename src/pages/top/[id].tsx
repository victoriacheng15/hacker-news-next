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

	const { id, object } = router.query;
	const res = JSON.parse(object as string);
	const commentIds = res.kids;
	const title = res.title

	const { comments, status, error } = useAppSelector(selectComments);

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchComments(commentIds));
		}
	}, [dispatch, status, commentIds]);

	return (
		<MainContainer>
			<h1>Comments</h1>
			<p>{title}</p>
			{comments.map((comment) => (
				<Comment key={comment.id} {...comment} />
			))}
			<LoadingInfo status={status} error={error} />
		</MainContainer>
	);
}

export default Comments;
