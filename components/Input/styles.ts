import styled from "styled-components";
import { FormContainer } from "../Form";

export const Error = styled.p`
  color: var(--error-color);
  margin: -1.5em 0 2em 0;
`;

export const InputContainer = styled.input`
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  height: 50px;
  padding: 0 1em;

  ${FormContainer} & {
    margin-bottom: 2em;

    &[type="datetime-local"] {
      -webkit-appearance: textfield;
    }
  }
`;
