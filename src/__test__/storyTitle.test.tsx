import { describe, expect, it } from "vitest";
import { render, screen } from "../test-utils";
import StoryTitle from "../components/StoryBlock/StoryTitle";

describe("StoryTitle component", () => {
	it("should render StoryTitle component with url", () => {
		const url = "https://www.google.com/";
		const storyTitle = "Google";
		const type = "job";
		render(<StoryTitle url={url} title={storyTitle} type={type} />);
		const title = screen.getByRole("heading");
		expect(title).toHaveTextContent("Google");
	});


  it("should not have url if the type is not equal to job", () => {
    const storyTitle = "lorem ipsum";
    const type = "top";
    render(<StoryTitle  title={storyTitle} type={type} />);
    const title = screen.queryByRole("heading");
    expect(title).toHaveTextContent("lorem ipsum");
  });
});
