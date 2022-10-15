import React, { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isInvalid?: boolean;
}

export const Input: React.FC<InputProps> = ({ type = "text", ...rest }) => {
  return <InputContainer type={type} {...rest} />;
};
