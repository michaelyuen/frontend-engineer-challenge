import { format } from "date-fns";
import { CountdownContainer, NumbersContainer, Warning } from "./styles";
import { Button, ButtonProps } from "../Button";
import { DeadlineFormData, DeadlineValue } from "../DeadlineForm";
import { FlippingNumber } from "../FlippingNumber";
import { useCountdown, useHasMounted } from "../../hooks";

export interface CountdownProps extends DeadlineFormData {
  buttonProps?: ButtonProps;
  deadlineValue: DeadlineValue;
  onReset(): void;
}

export const Countdown: React.FC<CountdownProps> = ({
  buttonProps,
  deadlineName,
  deadlineValue,
  onReset,
}) => {
  const hasMounted = useHasMounted();
  const { isInPast, timeRemaining } = useCountdown(deadlineValue);
  const message = `Time until ${format(
    new Date(deadlineValue),
    "PPPP 'at' p"
  )}`;

  return (
    <CountdownContainer>
      <h1>{deadlineName}</h1>
      <p>{message}</p>
      {hasMounted && (
        <NumbersContainer>
          {Object.keys(timeRemaining).map((key) => (
            <FlippingNumber
              key={key}
              label={key}
              number={timeRemaining[key as keyof Duration]}
            />
          ))}
        </NumbersContainer>
      )}

      {isInPast && (
        <Warning>
          Your deadline has passed!
          <br />
          <br />
          Use the Reset button to update your deadline.
        </Warning>
      )}

      <Button onClick={onReset} {...buttonProps}>
        Reset
      </Button>
    </CountdownContainer>
  );
};
