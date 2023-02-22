import { describe, expect, it } from "vitest";
import { render, screen } from "../test-utils";
import LoadingInfo from "../components/LoadingInfo";


describe("LoadingInfo component", () => {
  it("renders spinner component when status equals to loading", async () => {
    render(<LoadingInfo status="loading" error="" />);
    const spinner = await screen.findByTestId("spinner");
    expect(spinner).toBeInTheDocument();
  });

  it("renders error message when error is not an empty string", async () => {
    render(<LoadingInfo status="failed" error="cant fetch request" />);
    const errorMessage = await screen.findByRole("heading");
    expect(errorMessage).toHaveTextContent("something is wrong");
  });
})