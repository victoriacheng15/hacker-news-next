import { intlFormatDistance, format } from "date-fns";


export function timeAgo(time: string) {
  const today = new Date();
	return intlFormatDistance(new Date(time), today);
}
