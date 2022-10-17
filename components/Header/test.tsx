import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Header } from "./Header";

describe("Header", () => {
  test("renders", () => {
    render(<Header />);
    expect(screen.getByLabelText("Koala logo")).toBeInTheDocument();
    expect(
      screen.getByText("Frontend Engineer Coding Challenge")
    ).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });

  test("has no a11y violations", async () => {
    const { container } = render(<Header />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
