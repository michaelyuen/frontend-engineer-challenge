import { DeadlineFormContainer } from "./styles";
import { Input, InputProps } from "../Input";

export interface DeadlineFormProps {
  deadlineValue?: string;
  disabled: boolean;
  nameValue?: string;
  onChange: InputProps["onChange"];
  onSubmit(data: any): void;
}

export const DeadlineForm: React.FC<DeadlineFormProps> = ({
  deadlineValue,
  disabled,
  nameValue,
  onChange,
  onSubmit,
  ...props
}) => {
  return (
    <DeadlineFormContainer
      aria-label="Deadline Form"
      name="Deadline Form"
      noValidate
      onSubmit={onSubmit}
      {...props}
    >
      <h1>Countdown to the Deadline</h1>

      <label htmlFor="deadline-name">What&apos;s the deadline?</label>
      <Input
        aria-label="Enter name for deadline"
        id="deadline-name"
        name="name"
        onChange={onChange}
        value={nameValue}
      />

      <label htmlFor="deadline-date-time">When is it?</label>
      <Input
        aria-label="Enter date and time for deadline"
        id="deadline-date-time"
        name="deadline"
        onChange={onChange}
        type="datetime-local"
        value={deadlineValue}
      />
      <button disabled={disabled} type="submit">
        Start the countdown!
      </button>
    </DeadlineFormContainer>
  );
};
