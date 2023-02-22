import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "../test-utils";
import Navbar from "../components/Navbar";

describe("Navbar component", () => {
  beforeEach(() => {
    render(<Navbar />);
  })

  it("should render Navbar component", () => {
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  })
  
  it("should have 4 links", () => {
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(4);
  });

  it("should have Top Stories link", () => {
    const top = screen.getByRole("link", { name: /top stories/i });
    expect(top).toHaveTextContent("Top Stories");
  });
});
