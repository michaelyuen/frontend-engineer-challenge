import React, { InputHTMLAttributes } from "react";
import { Error, InputContainer } from "./styles";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  isInvalid?: boolean;
}

export const Input: React.FC<InputProps> = ({
  error,
  type = "text",
  ...rest
}) => {
  return (
    <>
      <InputContainer type={type} {...rest} />
      {error && <Error>{error}</Error>}
    </>
  );
};
