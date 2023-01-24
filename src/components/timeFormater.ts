import { formatDistanceStrict, fromUnixTime } from "date-fns";

const today = new Date();

export function timeAgo(time: number) {
  const unixTime = fromUnixTime(time)
	return formatDistanceStrict(unixTime, today);
}
