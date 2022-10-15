import styled from "styled-components";
import { Form } from "../Form";
import { InputContainer } from "../Input";

export const DeadlineFormContainer = styled(Form)`
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 1em;
  }

  label {
    margin-bottom: 0.5em;
  }

  ${InputContainer} {
    margin-bottom: 2em;
  }

  // TODO: get button styles from theme
  button {
    align-self: center;
    background: #0d6cf2;
    border: 1px solid #0d6cf2;
    border-radius: var(--border-radius);
    color: #ffffff;
    padding: 1em;
    width: 50%;

    &[disabled] {
      background: grey;
      cursor: not-allowed;
    }
  }
`;
