import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AppState } from "@/store";
import {
	getAllDetails,
	initialState,
	getStoryComments,
} from "@/utils/helpers";
import { Pagination } from "@/types/features";

export const fetchTopStories = createAsyncThunk(
	"tops/topsStoryDetails",
	async ({ page, limit }: Pagination) => {
		const details = await getAllDetails("top", page, limit);
		return details;
	},
);

export const fetchTopComments = createAsyncThunk(
	"tops/storyComments",
	async (storyId: number) => {
		const comments = await getStoryComments(storyId);
		return { storyId, comments };
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
		loadMoreComments: (state) => {
			state.commentLimit += 10;
			state.error = "";
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
			.addCase(fetchTopComments.pending, (state) => {
				state.commentLoading = true;
			})
			.addCase(fetchTopComments.fulfilled, (state, action) => {
				state.commentLoading = false;
				state.comments[action.payload.storyId] = action.payload.comments;
			})
			.addCase(fetchTopComments.rejected, (state, action) => {
				state.commentLoading = false;
				state.error = action.error.message!;
			});
	},
});

export const { loadMoreStories, loadMoreComments } = topsSlice.actions;

export const selectTops = (state: AppState) => state.tops;

export default topsSlice;
