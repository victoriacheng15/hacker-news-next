import { useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import { fetchComments, selectComments } from "@/features/commentsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useRouter } from "next/router";
import MainContainer from "@/components/MainContainer";
import LoadingInfo from "@/components/LoadingInfo";
import Comment from "@/components/Comment";

function Comments() {
	const [router, dispatch] = [useRouter(), useAppDispatch()];

	const { object } = router.query;
	const res = JSON.parse(object as string);
	const [id, title] = [res.id, res.title];

	const { comments, status, error } = useAppSelector(selectComments);

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchComments(id));
		}
	});

	return (
		<MainContainer>
			<Heading fontSize="2xl">{title}</Heading>
			{comments?.map((comment) => (
				<Comment key={comment.text} {...comment} />
			))}
			<LoadingInfo status={status} error={error} />
		</MainContainer>
	);
}

export default Comments;
