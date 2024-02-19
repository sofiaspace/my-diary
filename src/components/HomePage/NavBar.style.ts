import styled from "styled-components";
import { device } from "../../styles/mediaBreakpoints";
import { NavLink } from "react-router-dom";

export const NavBarContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding-right: 1.5rem;
  gap: 1rem;
  list-style: none;

  @media ${device.md} {
    padding-right: 1rem;
  }
  @media ${device.sm} {
  }
`;

export const NavBarList = styled.li`
  &:hover {
    cursor: pointer;
    color: #686868;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
`;
