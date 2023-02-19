import type { AppState } from "@/store";
import { CommentsResponse } from "@/types/features";
import { getStoryComments } from "@/utils/fetchHelpers";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk(
	"comments/getComments",
	async (storyId: number) => {
		const comments = await getStoryComments(storyId);
		return { storyId, comments };
	},
);

const initialState: CommentsResponse = {
	comments: {},
	commentLoading: false,
	commentError: "",
	commentPage: 0,
	commentLimit: 20,
};

const commentsSlice = createSlice({
	name: "comments",
	initialState,
	reducers: {
		loadMoreComments: (state) => {
			state.commentLimit += 10;
			state.commentError = "";
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchComments.pending, (state) => {
				state.commentLoading = true;
			})
			.addCase(fetchComments.fulfilled, (state, action) => {
				state.commentLoading = false;
				state.comments[action.payload.storyId] = action.payload.comments;
			})
			.addCase(fetchComments.rejected, (state, action) => {
				state.commentLoading = false;
				state.commentError = action.error.message!;
			});
	},
});

export const { loadMoreComments } = commentsSlice.actions;

export const selectComments = (state: AppState) => state.comments;

export default commentsSlice;
