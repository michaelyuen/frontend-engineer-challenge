import { StyledCountdown } from "./styles";

export const Countdown = () => {
  return (
    <StyledCountdown>
      <div
        style={{
          border: ".5px solid gray",
          width: 50,
          borderRadius: "3px",
          background: "#EFEFEF",
          padding: 3,
        }}
      >
        <div onClick={() => alert("TODO")}>Start</div>
      </div>
    </StyledCountdown>
  );
};
