import { StoryResponse } from "@/types/features";
import { IItem } from "hacker-news-api-types";
import axios from "axios";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";
const DETAIL_URL = (id: number) => `${BASE_URL}/item/${id}.json`;
export const ITEM_URL = "http://hn.algolia.com/api/v1/items/";

function getStoryType(type: string) {
	return `${BASE_URL}/${type}stories.json`;
}

async function getIdDetails(id: number) {
	const res = await axios.get(DETAIL_URL(id));
	return res.data;
}

export async function getAllDetails(type: string, page: number, limit: number) {
	const res = await axios.get(getStoryType(type));
	const details = res.data;

	const promises: IItem[] = details.slice(page, limit).map(getIdDetails);
	return await Promise.all(promises);
}

export async function getStoryComments(id: number) {
	const res = await axios.get(`${ITEM_URL}${id}`);
	return res.data.children;
}

export function slug(title: string | undefined) {
	return title?.toLowerCase().replace(/\s+/g, "-");
}

export const initialState: StoryResponse = {
	details: [],
	loadingStatus: "idle",
	error: "",
	page: 0,
	limit: 20,
	comments: {},
	commentLoadng: false,
	commentError: "",
	commentPage: 0,
	commentLimit: 20,
};
