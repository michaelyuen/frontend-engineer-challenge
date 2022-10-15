import { FormHTMLAttributes } from "react";
import { FormContainer } from "./styles";

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

export const Form: React.FC<FormProps> = ({ children, ...rest }) => {
  return <FormContainer {...rest}>{children}</FormContainer>;
};
