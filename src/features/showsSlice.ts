import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AppState } from "@/store";
import {
	getAllDetails,
	initialState,
	getStoryComments,
} from "@/utils/helpers";
import { Pagination } from "@/types/features";

export const fetchShowStories = createAsyncThunk(
	"tops/topsStoryDetails",
	async ({ page, limit }: Pagination) => {
		const details = await getAllDetails("top", page, limit);
		return details;
	},
);

export const fetchShowComments = createAsyncThunk(
	"tops/storyComments",
	async (storyId: number) => {
		const comments = await getStoryComments(storyId);
		return { storyId, comments };
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
		loadMoreComments: (state) => {
			state.commentLimit += 10;
			state.error = "";
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
			})
			.addCase(fetchShowComments.pending, (state) => {
				state.commentLoading = true;
			})
			.addCase(fetchShowComments.fulfilled, (state, action) => {
				state.commentLoading = false;
				state.comments[action.payload.storyId] = action.payload.comments;
			})
			.addCase(fetchShowComments.rejected, (state, action) => {
				state.commentLoading = false;
				state.error = action.error.message!;
			});
	},
});

export const { loadMoreStories, loadMoreComments } = showsSlice.actions;

export const selectShows = (state: AppState) => state.shows;

export default showsSlice;
