import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { DeadlineForm } from "./DeadlineForm";

describe("DeadlineForm", () => {
  test("renders", () => {
    render(
      <DeadlineForm
        deadlineName=""
        deadlineValue=""
        onChange={jest.fn}
        onSubmit={jest.fn}
      />
    );
    expect(screen.getByText("Deadline Countdown")).toBeInTheDocument();
    expect(screen.getByLabelText("Deadline Form")).toBeInTheDocument();
    expect(
      screen.getByLabelText("Enter name for deadline")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Enter date and time for deadline")
    ).toBeInTheDocument();
    expect(screen.getByText("Start the countdown!")).toBeInTheDocument();
  });

  /**
   * Changes every time due to deadlineValue's min
   */
  xtest("matches snapshot", () => {
    const { container } = render(
      <DeadlineForm
        deadlineName=""
        deadlineValue=""
        onChange={jest.fn}
        onSubmit={jest.fn}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("has no a11y violations", async () => {
    const { container } = render(
      <DeadlineForm
        deadlineName=""
        deadlineValue=""
        onChange={jest.fn}
        onSubmit={jest.fn}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
