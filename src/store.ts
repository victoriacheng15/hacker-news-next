import { configureStore } from "@reduxjs/toolkit";
import topsSlice from "@/features/topsSlice";
import showsSlice from "@/features/showsSlice";
// import jobsSlice from "@/features/jobsSlice";

export const store = configureStore({
	reducer: {
		[topsSlice.name]: topsSlice.reducer,
		[showsSlice.name]: showsSlice.reducer,
		// [jobsSlice.name]: jobsSlice.reducer,
	},
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
