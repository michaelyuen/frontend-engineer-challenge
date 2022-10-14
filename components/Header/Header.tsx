import { HeaderContainer } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      {/* <Image alt="Koala logo" priority src={logo} width={180} /> */}
      {/* TODO(my): Replace with Image, switching logo src based on theme */}
      <div aria-label="Koala logo" />
      <p>Frontend Engineer Coding Challenge</p>
    </HeaderContainer>
  );
};
