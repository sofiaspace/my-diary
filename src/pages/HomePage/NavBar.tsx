import { FC } from "react";
import { NavBarContainer, NavBarList, StyledNavLink } from "./NavBar.style";

const NavBar: FC = () => {
  return (
    <NavBarContainer>
      <NavBarList>
        <li>
          <StyledNavLink to="/">HOME</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/about">ABOUT</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/calendar">CALENDAR</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/todo">TO-DO</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/diary">DIARY</StyledNavLink>
        </li>
      </NavBarList>
    </NavBarContainer>
  );
};

export default NavBar;
