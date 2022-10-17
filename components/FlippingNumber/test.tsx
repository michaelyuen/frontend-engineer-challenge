import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { FlippingNumber } from "./FlippingNumber";

describe("FlippingNumber", () => {
  test("renders", () => {
    render(<FlippingNumber animationDuration={0} label="Minutes" number={1} />);
    expect(screen.getByText("Minutes")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { container } = render(
      <FlippingNumber animationDuration={0} label="Seconds" number={59} />
    );
    expect(container).toMatchSnapshot();
  });

  test("has no a11y violations", async () => {
    const { container } = render(
      <FlippingNumber animationDuration={0} label="Hours" number={0} />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
