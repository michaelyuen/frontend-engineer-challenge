import styled, { css, keyframes } from "styled-components";

const flip = keyframes`
  0% {
    transform: rotateX(0);
  }

  100% {
    border-bottom: 1px solid black;
    transform: rotateX(-0.5turn);
    z-index: 1;
  }
`;

const show = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const FlippingNumberContainer = styled.div`
  position: relative;
  text-align: center;
  z-index: 1;

  p {
    font-weight: bold;
    letter-spacing: 5px;
    margin-top: 1em;
    text-transform: uppercase;
  }
`;

export interface NumberContainerProps {
  animationDuration: number;
  shouldAnimate: boolean;
}

export const NumberContainer = styled.div`
  color: var(--flipping-number-color);
  font-size: 70px;
  height: 100px;
  line-height: 100px;
  perspective: 500px;
  position: relative;

  @media (min-width: 768px) {
    font-size: 100px;
    height: 150px;
    line-height: 150px;
  }

  div {
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    width: 100%;

    &:not(.flipper) {
      overflow: hidden;
    }

    &:not(.bottom.current) {
      top: 0;
    }

    &.top {
      backface-visibility: hidden;
      background: var(--flipping-number-background-color-top);
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      box-shadow: var(--flipping-number-box-shadow-top);
      height: 50%;

      &.next {
        &:before {
          animation: ${({
            animationDuration,
            shouldAnimate,
          }: NumberContainerProps) =>
            shouldAnimate
              ? css`
                  ${show} ${animationDuration /
                  2}ms ease-in reverse forwards ${animationDuration / 2}ms
                `
              : "none"};
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 1) 100%
          );
          content: "";
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }
      }
    }

    &.bottom {
      align-items: flex-end;
      background: var(--flipping-number-background-color-bottom);
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      box-shadow: var(--flipping-number-box-shadow-bottom);

      &.current {
        height: 50%;
        border-top: 2px solid black;
        bottom: 0;
        transform: rotateX(5deg);

        &:before {
          animation: ${({ animationDuration, shouldAnimate }) =>
            shouldAnimate
              ? css`
                  ${show} ${animationDuration * 0.85}ms ease-in forwards
                `
              : "none"};
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 1) 100%
          );
          content: "";
          height: 100%;
          left: 0;
          opacity: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }
      }
    }

    &.flipper {
      animation: ${({ animationDuration, shouldAnimate }) =>
        shouldAnimate
          ? css`
              ${flip} ${animationDuration}ms ease-in forwards
            `
          : "none"};
      height: 50%;
      transform-origin: bottom;
      transform-style: preserve-3d;

      .bottom,
      .top {
        backface-visibility: hidden;
        height: 100%;
      }

      .bottom {
        transform: rotateX(0.5turn);
      }

      .top {
        transform: rotateX(0deg);

        &:before {
          animation: ${({
            animationDuration,
            shouldAnimate,
          }: NumberContainerProps) =>
            shouldAnimate
              ? css`
                  ${show} ${animationDuration}ms ease-in forwards
                `
              : "none"};
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 1) 100%
          );
          content: "";
          height: 100%;
          left: 0;
          opacity: 0;
          position: absolute;
          top: 0;
          width: 100%;
          z-index: 100;
        }
      }
    }
  }
`;
