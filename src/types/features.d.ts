import { IItem } from "hacker-news-api-types";

type LoadingStatus = "idle" | "loading" | "succeeded" | "failed";

interface StoryResponse {
	details: IItem[];
	loadingStatus: LoadingStatus;
	error: string;
	page: number;
	limit: number;
}

interface CommentsResponse {
	comments: {
		[id: number]: Comments[];
	};
	loadingStatus: LoadingStatus;
	error: string;
}

type Pagination = Pick<ApiResponse, "page" | "limit">;