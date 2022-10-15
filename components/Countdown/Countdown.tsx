import { CountdownContainer } from "./styles";

export interface CountdownProps {
  deadline: string;
  name: string;
}

export const Countdown: React.FC<CountdownProps> = ({ deadline, name }) => {
  return (
    <CountdownContainer>
      <h1>Countdown to {name}</h1>
      <p>{deadline}</p>
    </CountdownContainer>
  );
};
