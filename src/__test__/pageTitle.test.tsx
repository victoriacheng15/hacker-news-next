import { describe, expect, it } from "vitest";
import { render, screen } from "../test-utils";
import PageTitle from "../components/PageTitle";

describe("PageTitle component", () => {
	it("renders PageTitle component", () => {
		render(<PageTitle pageTitle="Top" />);
		const title = screen.getByRole("heading");
		expect(title).toHaveTextContent("Top");
	});
});
