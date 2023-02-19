import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectComments } from "@/features/commentsSlice";
import { fetchComments } from "@/features/commentsSlice";
import { loadMoreComments } from "@/features/commentsSlice";

export function useFetchComments() {
	const dispatch = useAppDispatch();

	const { comments, commentLoading, commentPage, commentLimit } =
		useAppSelector(selectComments);

	const dispatchFetchComments = (id: number) => dispatch(fetchComments(id));
	const dispatchLoadMoreComments = () => dispatch(loadMoreComments());

	return {
		comments,
		commentLoading,
		commentPage,
		commentLimit,
		dispatchFetchComments,
		dispatchLoadMoreComments,
	};
}
