import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AppState } from "@/store";
import { getStoryComments } from "../helpers";

export const fetchComments = createAsyncThunk(
	"tops/storyComments",
	async (commentIds: number[]) => {
		const storyComments = await getStoryComments(commentIds);

		return { storyComments };
	},
);

const initialState: CommentsResponse = {
	comments: [],
	status: "idle",
	error: false,
};

const commentsSlice = createSlice({
	name: "storyComments",
	initialState,
	reducers: {
		clearComments: (state) => {
			state.status = "idle"
			state.comments = [];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchComments.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchComments.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.comments = [...action.payload.storyComments];
			})
			.addCase(fetchComments.rejected, (state) => {
				state.status = "failed";
				state.error = true;
			});
	},
});

export const { clearComments } = commentsSlice.actions;

export const selectComments = (state: AppState) => state.storyComments;

export default commentsSlice;