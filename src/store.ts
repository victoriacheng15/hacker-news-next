import { configureStore } from "@reduxjs/toolkit";
import topsSlice from "@/features/top/topsSlice";
import jobsSlice from "@/features/job/jobsSlice";
import showsSlice from "@/features/show/showsSlice";
import commentsSlice from "@/features/comments/commentsSlice";

export const store = configureStore({
	reducer: {
		[topsSlice.name]: topsSlice.reducer,
		[showsSlice.name]: showsSlice.reducer,
		[jobsSlice.name]: jobsSlice.reducer,
		[commentsSlice.name]: commentsSlice.reducer,
	},
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
