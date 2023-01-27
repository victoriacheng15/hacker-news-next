import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AppState } from "@/store";
import { getAllDetails, initialState } from "./helpers";

export const fetchJobDetails = createAsyncThunk(
	"jobs/jobsStoryDetails",
	async ({ page, limit }: Pagination) => {
		const details = await getAllDetails("job", page, limit);
		return { details };
	},
);

const jobsSlice = createSlice({
	name: "jobs",
	initialState,
	reducers: {
		loadMore: (state) => {
			state.status = "idle";
			state.limit += 10;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchJobDetails.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchJobDetails.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.details = action.payload.details;
			})
			.addCase(fetchJobDetails.rejected, (state) => {
				state.status = "failed";
				state.error = true;
			});
	},
});

export const { loadMore } = jobsSlice.actions;

export const selectJobs = (state: AppState) => state.jobs;

export default jobsSlice;
