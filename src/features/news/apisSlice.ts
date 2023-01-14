import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";

export const apiSlice = createApi({
	reducerPath: "hackernews",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		getTopStories: builder.query({
			query: () => "/topstories.json",
		}),
    getStory: builder.query({
      query: (id) => `/item/${id}.json`
    })
	}),
});

export const { useGetTopStoriesQuery, useGetStoryQuery } = apiSlice;
