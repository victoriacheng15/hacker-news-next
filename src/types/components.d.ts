interface Story {
	by: string;
	id: number;
	kids: number[];
	score: number;
	time: number;
	title: string;
	// type: "story" | "job";
	url: string;
}

type Job = Omit<Story, "kids">;

type StoryProps = Story & Job;

interface MainContainerProps {
	children: React.ReactNode;
	status: LoadingStatus;
	error: boolean;
	onClick: () => void;
}
