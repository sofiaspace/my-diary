import styled from "styled-components";
import { device } from "../../styles/mediaBreakpoints";
import { NavLink } from "react-router-dom";

export const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: end;
  font-size: 1.2rem;
`;

export const NavBarList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0 1rem;
  list-style: none;
  flex-wrap: wrap;

  /* @media ${device.md} {
  }
  @media ${device.sm} {
  } */

  li {
    padding: 0.5rem;
    &:hover {
      cursor: pointer;
      color: #686868;
    }

    @media ${device.xs} {
      padding: 0.2rem;
    }
    @media ${device.md} {
      padding: 0.3rem;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
`;
