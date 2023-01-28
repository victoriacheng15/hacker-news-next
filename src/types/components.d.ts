interface Story {
	id: number;
	created_at: string;
	author: string;
	title: string;
	url: string;
	text: string;
	points: number;
	children: StoryComment[] | null;
}

interface StoryComment {
	id: number;
	created_at: string;
	author: string;
	text: string;
	children: StoryComment[] | null;
	map(arg0: (comment: StoryComment) => JSX.Element): React.ReactNode;
}

type Job = Omit<Story, "children">;

type StoryProps = Story;

type LoadingInfoProps = Pick<ApiResponse, "status" | "error">;

type CommentProps = Pick<
	StoryComments,
	"author" | "time" | "text" | "children" | "create_at"
>;
