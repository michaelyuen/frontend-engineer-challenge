import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  ...props
}) => {
  return (
    <ButtonContainer type={type} {...props}>
      {children}
    </ButtonContainer>
  );
};
