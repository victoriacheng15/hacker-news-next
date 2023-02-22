import { describe, expect, it } from "vitest";
import { render, screen } from "../test-utils";
import LoadingInfo from "../components/LoadingInfo";

describe("LoadingInfo component", () => {
	it("should not render spinner component when status equals to idle", () => {
		render(<LoadingInfo status="idle" error="" />);
		const spinner = screen.queryByTestId("spinner");
		expect(spinner).not.toBeInTheDocument();
	});

	it("renders spinner component when status equals to loading", () => {
		render(<LoadingInfo status="loading" error="" />);
		const spinner = screen.queryByTestId("spinner");
		expect(spinner).toBeInTheDocument();
	});

	it("renders error message when error is not an empty string", async () => {
		render(<LoadingInfo status="failed" error="cant fetch request" />);
		const errorMessage = await screen.queryByRole("heading");
		expect(errorMessage).toHaveTextContent("something is wrong");
	});
});
