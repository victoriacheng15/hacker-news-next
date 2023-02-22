import type { AppState } from "../store";
import { Pagination } from "../types/features";
import { getAllDetails, initialState } from "../utils/fetchHelpers";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchShowStories = createAsyncThunk(
	"shows/showsStoryDetails",
	async ({ page, limit }: Pagination) => {
		const details = await getAllDetails("show", page, limit);
		return details;
	},
);

const showsSlice = createSlice({
	name: "shows",
	initialState,
	reducers: {
		loadMoreStories: (state) => {
			state.loadingStatus = "idle";
			state.limit += 10;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchShowStories.pending, (state) => {
				state.loadingStatus = "loading";
			})
			.addCase(fetchShowStories.fulfilled, (state, action) => {
				state.loadingStatus = "succeeded";
				state.details = [...action.payload];
			})
			.addCase(fetchShowStories.rejected, (state, action) => {
				state.loadingStatus = "failed";
				state.error = action.error.message!;
			});
	},
});

export const { loadMoreStories } = showsSlice.actions;

export const selectShows = (state: AppState) => state.shows;

export default showsSlice;
