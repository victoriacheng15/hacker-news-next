const BASE_URL = " https://hacker-news.firebaseio.com/v0";

export const typeStories = (type: string) => `${BASE_URL}/${type}stories.json`