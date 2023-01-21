import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AppState } from "@/store";
import { fetchDetails, initialState } from "../helpers";

export const fetchShowDetails = createAsyncThunk(
	"show/showsStoryDetails",
	async ({ page, limit }: Pagination) => {
		const details = await fetchDetails("show", page, limit);

		return { details };
	},
);

const showsSlice = createSlice({
	name: "shows",
	initialState,
	reducers: {
		loadMore: (state) => {
			state.status = "idle";
			state.limit += 20;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchShowDetails.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchShowDetails.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.details = action.payload.details;
			})
			.addCase(fetchShowDetails.rejected, (state) => {
				state.status = "failed";
				state.error = true;
			});
	},
});

export const { loadMore } = showsSlice.actions

export const selectShows = (state: AppState) => state.shows

export default showsSlice;

