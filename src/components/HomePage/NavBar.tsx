import { FC } from "react";
import { NavBarContainer, NavBarList, StyledNavLink } from "./NavBar.style";

const NavBar: FC = () => {
  return (
    <nav>
      <NavBarContainer>
        <NavBarList>
          <StyledNavLink to="/">HOME</StyledNavLink>
        </NavBarList>
        <NavBarList>
          <StyledNavLink to="/about">ABOUT</StyledNavLink>
        </NavBarList>
        <NavBarList>
          <StyledNavLink to="/calendar">CALENDAR</StyledNavLink>
        </NavBarList>
        <NavBarList>
          <StyledNavLink to="/todo">TO-DO</StyledNavLink>
        </NavBarList>
        <NavBarList>
          <StyledNavLink to="/diary">DIARY</StyledNavLink>
        </NavBarList>
        <NavBarList>
          <StyledNavLink to="/customize">CUSTOMIZE</StyledNavLink>
        </NavBarList>
      </NavBarContainer>
    </nav>
  );
};

export default NavBar;
