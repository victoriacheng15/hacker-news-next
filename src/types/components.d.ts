interface CommonProperties {
	by: string;
	id: number;
	kids: number[];
	time: number;
}

interface Story extends CommonProperties {
	score: number;
	title: string;
	url: string;
}

type Job = Omit<Story, "kids">;

type StoryProps = Story & Job;

interface StoryComments extends CommonProperties {
	text: string;
	parent: number;
}

type LoadingInfoProps = Pick<ApiResponse, "status" | "error">;

type CommentProps =  Pick<StoryComments, "by" | "time" | "text" | "kids">