import { useEffect, useRef } from "react";
import { FlippingNumberContainer, NumberContainer } from "./styles";

export interface FlippingNumberProps {
  animationDuration?: number;
  label?: string;
  number?: number;
}

export const FlippingNumber: React.FC<FlippingNumberProps> = ({
  animationDuration = 1000,
  label,
  number,
}) => {
  const previousNumberRef = useRef(number);
  const { current: previousNumber } = previousNumberRef;

  useEffect(() => {
    previousNumberRef.current = number;
  }, [number]);

  return (
    <FlippingNumberContainer>
      <NumberContainer
        animationDuration={animationDuration}
        key={number}
        shouldAnimate={previousNumber !== number}
      >
        <div className="top next">{number}</div>
        <div className="flipper">
          <div className="bottom">{number}</div>
          <div className="top">{previousNumber}</div>
        </div>
        <div className="bottom current">{previousNumber}</div>
      </NumberContainer>
      {label && <p>{label}</p>}
    </FlippingNumberContainer>
  );
};
