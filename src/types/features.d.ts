type LoadingStatus = "idle" | "loading" | "succeeded" | "failed";

interface StoryResponse {
	details: Details;
	status: LoadingStatus;
	error: boolean;
	page: number;
	limit: number;
}

interface CommentsResponse {
	comments: StoryComment[];
	status: LoadingStatus;
	error: boolean;
}

type Pagination = Pick<ApiResponse, "page" | "limit">;

type Details = Story[];