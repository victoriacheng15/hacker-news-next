type LoadingInfoProps = Pick<ApiResponse, "status" | "error">;

interface Comments {
	id: number;
	created_at_i: number;
	author: string;
	text: string;
	title: string;
	url: string;
	children: Comments[];
}

type CommentProps = Pick<
	StoryComments,
	"author" | "time" | "text" | "children" | "create_at"
>;
