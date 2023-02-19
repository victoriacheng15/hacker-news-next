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
		[id: number]: Comments;
	};
	commentLoading: boolean;
	commentError: string;
	commentPage: number;
	commentLimit: number;
}

interface Comments {
	id: number;
	title: string;
	url: string;
	author: string;
	created_at_i: number;
	text: string;
	children: Comments[];
}

type Pagination = Pick<ApiResponse, "page" | "limit">;
