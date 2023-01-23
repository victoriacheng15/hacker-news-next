type LoadingStatus = "idle" | "loading" | "succeeded" | "failed";

interface ApiResponse {
	details: Details;
	status: LoadingStatus;
	error: boolean;
	page: number;
	limit: number;
}

type Pagination = Pick<ApiResponse, "page" | "limit">;

type Details = Story[] | Job[];
