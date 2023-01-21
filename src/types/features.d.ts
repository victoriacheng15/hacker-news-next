interface ApiResponse {
	details: Story[] | Job[];
	status: "idle" | "loading" | "succeeded" | "failed";
	error: boolean;
	page: number;
	limit: number;
}

type Pagination = Pick<ApiResponse, "page" | "limit">;

interface Story {
	by: string;
	id: number;
	kids: number[];
	score: number;
	time: number;
	title: string;
	type: "story" | "job";
	url: string;
}

interface Job {
	by: string;
	id: number;
	score: number;
	time: number;
	title: string;
	type: "story" | "job";
	url: string;
}
