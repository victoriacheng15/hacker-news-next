import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AppState } from "@/store";
import { getAllDetails, initialState, getStoryComments } from "@/utils/fetchHelpers";
import { Pagination } from "@/types/features";

export const fetchJobStories = createAsyncThunk(
	"jobs/jobsStoryDetails",
	async ({ page, limit }: Pagination) => {
		const details = await getAllDetails("job", page, limit);
		return details;
	},
);

export const fetchJobComments = createAsyncThunk(
	"jobs/storyComments",
	async (storyId: number) => {
		const comments = await getStoryComments(storyId);
		return { storyId, comments };
	},
);

const jobsSlice = createSlice({
	name: "jobs",
	initialState,
	reducers: {
		loadMoreStories: (state) => {
			state.loadingStatus = "idle";
			state.limit += 10;
		},
		loadMoreComments: (state) => {
			state.commentLimit += 10;
			state.error = "";
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchJobStories.pending, (state) => {
				state.loadingStatus = "loading";
			})
			.addCase(fetchJobStories.fulfilled, (state, action) => {
				state.loadingStatus = "succeeded";
				state.details = [...action.payload];
			})
			.addCase(fetchJobStories.rejected, (state, action) => {
				state.loadingStatus = "failed";
				state.error = action.error.message!;
			})
			.addCase(fetchJobComments.pending, (state) => {
				state.commentLoading = true;
			})
			.addCase(fetchJobComments.fulfilled, (state, action) => {
				state.commentLoading = false;
				state.comments[action.payload.storyId] = action.payload.comments;
			})
			.addCase(fetchJobComments.rejected, (state, action) => {
				state.commentLoading = false;
				state.error = action.error.message!;
			});
	},
});

export const { loadMoreStories, loadMoreComments } = jobsSlice.actions;

export const selectJobs = (state: AppState) => state.jobs;

export default jobsSlice;
