import { HeaderContainer } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      {/* TODO(my): Replace with Image, switching logo src based on theme */}
      <div aria-label="Koala logo" />
      <p>
        <span>FE Coding Challenge</span>
        <span>Frontend Engineer Coding Challenge</span>
      </p>
    </HeaderContainer>
  );
};
