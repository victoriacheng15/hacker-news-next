import type { AppState } from "@/store";
import { Pagination } from "@/types/features";
import { getAllDetails, initialState } from "@/utils/fetchHelpers";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTopStories = createAsyncThunk(
	"tops/topsStoryDetails",
	async ({ page, limit }: Pagination) => {
		const details = await getAllDetails("top", page, limit);
		return details;
	},
);

const topsSlice = createSlice({
	name: "tops",
	initialState,
	reducers: {
		loadMoreStories: (state) => {
			state.loadingStatus = "idle";
			state.limit += 10;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTopStories.pending, (state) => {
				state.loadingStatus = "loading";
			})
			.addCase(fetchTopStories.fulfilled, (state, action) => {
				state.loadingStatus = "succeeded";
				state.details = [...action.payload];
			})
			.addCase(fetchTopStories.rejected, (state, action) => {
				state.loadingStatus = "failed";
				state.error = action.error.message!;
			})
	},
});

export const { loadMoreStories } = topsSlice.actions;

export const selectTops = (state: AppState) => state.tops;

export default topsSlice;
