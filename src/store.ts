import { configureStore } from "@reduxjs/toolkit";
import topStorisReducer from "@/features/top/topStorisSlice";

export const store = configureStore({
	reducer: {
		topStories: topStorisReducer,
	},
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
