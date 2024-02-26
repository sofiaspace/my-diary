import { FC } from "react";
import { HeaderContainer } from "./Header.style";

const Header: FC = () => {
  return (
    <HeaderContainer onAnimationEnd={() => alert("aaa")}>
      My Diary
    </HeaderContainer>
  );
};

export default Header;
