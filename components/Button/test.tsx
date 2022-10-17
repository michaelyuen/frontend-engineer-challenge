import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Button } from "./Button";

describe("Button", () => {
  test("renders", () => {
    render(<Button>click me</Button>);
    expect(screen.getByText("click me")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { container } = render(<Button>click me</Button>);
    expect(container).toMatchSnapshot();
  });

  test("has no a11y violations", async () => {
    const { container } = render(<Button>click me</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
