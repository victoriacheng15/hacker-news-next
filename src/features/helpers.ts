import axios from "axios";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";
const ITEM_URL = "http://hn.algolia.com/api/v1/items/";

function getStoryType(type: string) {
	return `${BASE_URL}/${type}stories.json`;
}

async function getIdDetails(id: number) {
	const res = await axios.get(`${ITEM_URL}${id}`);
	return res.data
}

export async function getAllDetails(type: string, page: number, limit: number) {
	const res = await axios.get(getStoryType(type));
	const details = res.data;

	const promises = details.slice(page, limit).map(getIdDetails);
	return await Promise.all(promises);
}

export async function getStoryComments(id: number) {
	const res = await axios.get(`${ITEM_URL}${id}`);
	return res.data.children
}

export const initialState: StoryResponse = {
	details: [],
	status: "idle",
	error: false,
	page: 0,
	limit: 10,
};
