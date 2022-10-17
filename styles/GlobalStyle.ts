import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export interface Theme {
  backgroundColor: string;
  borderColor: string;
  borderRadius: string;
  fontColor: string;
  fontFamily: string;
  fontSize: string;
}

interface Props {
  theme: Theme;
}

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    ${({ theme }: Props) => `
      --background-color: linear-gradient(#bdd7f3, #c2d5e1, #ffcb9a, #fea58a, #ff5722);
      --background-image: url("/pattern-hills.svg");
      --border-color: ${theme.borderColor};
      --border-radius: ${theme.borderRadius};
      --color: ${theme.fontColor};
      --error-color: #f85149;
      --flipping-number-background-color-top: linear-gradient(to bottom,rgb(54 110 144),rgb(109 155 178));
      --flipping-number-background-color-bottom: linear-gradient( rgba(188,167,216,0.1), rgba(72,66,95,0.1) 50%, rgb(73 152 202) ), rgb(110 181 202);
      --flipping-number-box-shadow-top: 0px -2px 5px rgb(175 214 217), inset 0 2px rgb(25 160 199 / 90%), inset 0 3px 0 rgb(255 255 255 / 40%);
      --flipping-number-box-shadow-bottom: 0px 7px 2px rgb(54 109 130);
      --flipping-number-color: #e8ad80;
      // --fontFamily: ${theme.fontFamily};
      --fontFamily: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      // --fontSize: ${theme.fontSize};
      --fontSize: 16px;
      --logo: url("/koala-logo-light.png");
      --warning-color: #fff8b7;
    `}
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background-color: linear-gradient(#211e2b, #1b182a, #212643, #373e65, #7e5c29);
      --background-image: url("/pattern-hills.svg"), url("/bg-stars.svg");
      --border-color: #30363d;
      --border-radius: 6px;
      --color: #c9d1d9;
      --error-color: #f85149;
      --flipping-number-background-color-top: linear-gradient(to bottom, rgb(44, 43, 70), rgb(59, 60, 95));
      --flipping-number-background-color-bottom: linear-gradient(rgba(188, 167, 216, 0.1), rgba(72, 66, 95, 0.1) 50%, rgb(52, 53, 81)), rgb(52, 53, 81);
      --flipping-number-box-shadow-top: 0px -2px 5px rgb(26, 26, 37), inset 0 2px rgba(0, 0, 0, 0.9), inset 0 3px 0 rgba(255, 255, 255, 0.4);
      --flipping-number-box-shadow-bottom: 0px 7px 2px rgb(26, 26, 37);
      --flipping-number-color: #fb6087;
      --logo: url("/koala-logo-dark.png");
      --warning-color: #fff8b7;
    }
  }

  * {
    box-sizing: border-box;
  }

  body {
    background: var(--background-color);
    color: var(--color);
    font-family: var(--fontFamily);
    font-size: var(--fontSize);
  }

  html, body, #__next {
    height: 100%;
    width: 100%;
  }

  #__next {
    display: grid;
    grid-template-rows: auto 1fr;
  }

  main {
    background-image: var(--background-image);
    background-position: bottom center;
    background-repeat: no-repeat, repeat;
    background-size: contain;
    display: flex;
    justify-content: center;
    padding: 2em;
  }
`;
