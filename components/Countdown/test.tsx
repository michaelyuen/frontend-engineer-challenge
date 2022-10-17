import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Countdown } from "./Countdown";

describe("Countdown", () => {
  test("renders", () => {
    render(
      <Countdown
        deadlineName="Take Home Test"
        deadlineValue="2022-10-17T08:00"
        onReset={jest.fn}
      />
    );
    expect(
      screen.getByText("Time until Monday, October 17th, 2022 at 8:00 AM")
    ).toBeInTheDocument();
  });

  /**
   * Not a good test unless it's updated to be stable in some way.
   * Currently the snapshot will change every time (as expected)
   * because the time until the deadline keeps changing
   */
  xtest("matches snapshot for a deadline in the future", () => {
    const { container } = render(
      <Countdown
        deadlineName="Take Home Test"
        deadlineValue="2023-10-17T08:00"
        onReset={jest.fn}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("matches snapshot for a deadline in the past", () => {
    const { container } = render(
      <Countdown
        deadlineName="Take Home Test"
        deadlineValue="2021-10-17T08:00"
        onReset={jest.fn}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("has no a11y violations", async () => {
    const { container } = render(
      <Countdown
        deadlineName="Take Home Test"
        deadlineValue="2022-10-17T08:00"
        onReset={jest.fn}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
