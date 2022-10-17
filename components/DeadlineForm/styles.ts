import styled from "styled-components";
import { Form } from "../Form";
import { breakpoints } from "../../styles/breakpoints";

export const DeadlineFormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: ${breakpoints.sm};

  h1 {
    margin-bottom: 1em;
    text-align: center;
  }

  label {
    margin-bottom: 0.5em;
  }
`;
