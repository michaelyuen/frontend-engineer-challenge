import { useEffect, useState } from "react";
import { DeadlineFormContainer } from "./styles";
import { Button, ButtonProps } from "../Button";
import { FormProps } from "../Form";
import { Input, InputProps } from "../Input";
import { isPast } from "../../utils";

/**
 * Using TypeScript Template Literal Type: https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
 * Expected format: 2024-10-16T17:47
 */
export type DeadlineValue =
  `${number}${number}${number}${number}-${number}${number}-${number}${number}T${number}${number}:${number}${number}`;
export type DeadlineFormData = {
  deadlineName: string;
  deadlineValue: DeadlineValue;
};

export interface DeadlineFormProps extends DeadlineFormData {
  buttonProps?: ButtonProps;
  error?: string;
  onChange: InputProps["onChange"];
  onSubmit: FormProps["onSubmit"];
}

export const DeadlineForm: React.FC<DeadlineFormProps> = ({
  buttonProps,
  deadlineName,
  deadlineValue,
  error,
  onChange,
  onSubmit,
  ...props
}) => {
  const [deadlineValueError, setDeadlineValueError] = useState<string>();

  useEffect(() => {
    const isInPast = isPast(deadlineValue);
    if (isInPast) {
      setDeadlineValueError("Please select a date and time in the future");
    } else {
      setDeadlineValueError("");
    }
  }, [deadlineValue]);

  const isDisabled = !(deadlineName && deadlineValue) || !!deadlineValueError;

  return (
    <DeadlineFormContainer
      aria-label="Deadline Form"
      name="Deadline Form"
      noValidate
      onSubmit={onSubmit}
      {...props}
    >
      <h1>Deadline Countdown</h1>

      <label htmlFor="deadline-name">What&apos;s the deadline?</label>
      <Input
        aria-label="Enter name for deadline"
        aria-required="true"
        id="deadline-name"
        name="deadlineName"
        onChange={onChange}
        required
        value={deadlineName}
      />

      <label htmlFor="deadline-date-time">When is it?</label>
      <Input
        aria-label="Enter date and time for deadline"
        aria-required="true"
        error={deadlineValueError}
        id="deadline-date-time"
        min={new Date()
          .toLocaleString("sv", { dateStyle: "short", timeStyle: "short" })
          .replace(" ", "T")}
        name="deadlineValue"
        onChange={onChange}
        required
        type="datetime-local"
        value={deadlineValue}
      />
      <Button disabled={isDisabled} type="submit" {...buttonProps}>
        Start the countdown!
      </Button>
    </DeadlineFormContainer>
  );
};
