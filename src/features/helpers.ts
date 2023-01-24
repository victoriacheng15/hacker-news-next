import axios from "axios";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";
const ITEM_URL = `${BASE_URL}/item/`;

function getType(type: string) {
	return `${BASE_URL}/${type}stories.json`;
}

function getStoryUrl(storyId: number) {
	return `${ITEM_URL}${storyId}.json`;
}

async function getStoryIds(type: string) {
	const res = await axios.get(getType(type));
	return res.data;
}

async function getIdDetails(storyId: number) {
	const res = await axios.get(getStoryUrl(storyId));
	return res.data;
}

export async function getStoryDetails(type: string, page: number, limit: number){
	const storyIds: number[]= await getStoryIds(type);
	const promises = storyIds.slice(page, limit).map(getIdDetails);

	return await Promise.all(promises);
}

export async function getStoryComments(commentIds: number[]) {
	const promoises = commentIds.map(getIdDetails);
	return await Promise.all(promoises);
}

export const initialState: ApiResponse = {
	details: [],
	status: "idle",
	error: false,
	page: 0,
	limit: 20,
};
