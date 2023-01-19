import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { AppState } from "@/store";
import { typeStories } from "../typeStories";

export const fetchTopStories = createAsyncThunk(
	"topStories/fetchTopStories",
	async () => {
		const res = await axios.get(typeStories("top"));
		return res.data;
	},
);

const initialState: ApiResponse = {
	data: [],
	status: "idle",
	error: false,
};

const topStoriesSlice = createSlice({
	name: "topStories",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTopStories.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchTopStories.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.data = action.payload;
			})
			.addCase(fetchTopStories.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			});
	},
});

export const selectTopStories = (state: AppState) => state.topStories.data;
export const selectTopStoriesStatus = (state: AppState) =>
	state.topStories.status;
export const selectTopStoriesError = (state: AppState) =>
	state.topStories.error;

export default topStoriesSlice.reducer;
