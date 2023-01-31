import { fromUnixTime , formatDistanceToNowStrict    } from "date-fns";

export function timeAgo(time: number) {
  const postTime = fromUnixTime(time)
	return formatDistanceToNowStrict(postTime);
}
