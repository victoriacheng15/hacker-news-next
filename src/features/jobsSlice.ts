import type { AppState } from "@/store";
import { Pagination } from "@/types/features";
import { getAllDetails, initialState } from "@/utils/fetchHelpers";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchJobStories = createAsyncThunk(
	"jobs/jobsStoryDetails",
	async ({ page, limit }: Pagination) => {
		const details = await getAllDetails("job", page, limit);
		return details;
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
			});
	},
});

export const { loadMoreStories } = jobsSlice.actions;

export const selectJobs = (state: AppState) => state.jobs;

export default jobsSlice;
