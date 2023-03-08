import { beforeAll, afterAll, afterEach, it, expect, vi } from "vitest";
import { logRoles } from "@testing-library/react";
import {  render, screen } from "../test-utils";
import { rest } from "msw";
import StoryBlock from "../components/StoryBlock/index";
import { server } from "../mocks/server";
import Top from "../pages/top";

describe("Request Test", () => {
	// Start server before all tests
	beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

	//  Close server after all tests
	afterAll(() => server.close());

	// Reset handlers after each test `important for test isolation`
	afterEach(() => server.resetHandlers());

	it("basic mock server", async () => {
		const top = render(<Top />);
		// logRoles(top.container);
		const storyBlock = await screen.queryByRole("article");
		screen.debug()
		expect(storyBlock).toBeInTheDocument();
	});
});