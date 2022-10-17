import styled from "styled-components";
import { CountdownContainer } from "../Countdown";
import { FormContainer } from "../Form";

// TODO: get button styles from theme
export const ButtonContainer = styled.button`
  color: #ffffff;
  background: #0d6cf2;
  border-radius: var(--border-radius);
  border: 1px solid #0d6cf2;

  &[disabled] {
    background: grey;
    cursor: not-allowed;
  }

  ${FormContainer} &, ${CountdownContainer} & {
    align-self: center;
    padding: 1em;
  }
`;
