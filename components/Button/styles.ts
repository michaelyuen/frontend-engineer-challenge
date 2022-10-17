import styled from "styled-components";
import { CountdownContainer } from "../Countdown";
import { FormContainer } from "../Form";

// TODO: get button styles from theme
export const ButtonContainer = styled.button`
  color: #ffffff;
  background: #0d6cf2;
  border-radius: var(--border-radius);
  border: 1px solid #0d6cf2;

  &:focus {
    border-radius: var(--border-radius);
    box-shadow: 0 0 0 3px #58a6ff;
    outline: none;
  }

  &[disabled] {
    border-color: grey;
    background: grey;
    cursor: not-allowed;
  }

  ${FormContainer} &, ${CountdownContainer} & {
    align-self: center;
    padding: 1em;
  }
`;
