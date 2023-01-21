import { configureStore } from "@reduxjs/toolkit";
import topsSlice from "@/features/top/topsSlice";
import jobsSlice from "@/features/job/jobsSlice";
import showsSlice from "@/features/show/showsSlice";

export const store = configureStore({
	reducer: {
		[topsSlice.name]: topsSlice.reducer,
		[showsSlice.name]: showsSlice.reducer,
		[jobsSlice.name]: jobsSlice.reducer,
	},
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
