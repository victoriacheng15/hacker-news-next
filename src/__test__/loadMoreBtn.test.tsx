import { describe, expect, it } from "vitest";
import { render, screen } from "../test-utils";
import LoadMoreBtn from "../components/LoadMoreBtn";

describe("LoadMoreBtn component", () => {
	it("should render LoadMoreBtn component", () => {
		render(
			<LoadMoreBtn btnText="Load More" onClick={() => console.log("hi")} />,
		);
		const btn = screen.getByRole("button", { name: /load/i });
		expect(btn).toHaveTextContent("Load More");
	});
});
