import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AppState } from "@/store";
import { getAllDetails, initialState } from "./helpers";

export const fetchTopDetails = createAsyncThunk(
	"tops/topsStoryDetails",
	async ({ page, limit }: Pagination) => {
		const details = await getAllDetails("top", page, limit);
		return { details };
	},
);

const topsSlice = createSlice({
	name: "tops",
	initialState,
	reducers: {
		loadMore: (state) => {
			state.status = "idle";
			state.limit += 20;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTopDetails.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchTopDetails.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.details = [...action.payload.details];
			})
			.addCase(fetchTopDetails.rejected, (state) => {
				state.status = "failed";
				state.error = true;
			});
	},
});

export const { loadMore } = topsSlice.actions;

export const selectTops = (state: AppState) => state.tops;

export default topsSlice;
