interface ApiResponse {
	data: number[];
	status: "idle" | "loading" | "succeeded" | "failed";
	error: boolean | string | unknown;
}