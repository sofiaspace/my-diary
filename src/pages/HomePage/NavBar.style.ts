import styled from "styled-components";
import { device } from "../../styles/mediaBreakpoints";
import { NavLink } from "react-router-dom";
import { lightGrey3 } from "../../styles/variables";

export const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: end;
  font-size: 1.2rem;

  @media ${device.sm} {
    display: none;
  }
`;

export const NavBarList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0 1rem;
  list-style: none;
  flex-wrap: wrap;
`;

export const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  margin-top: 0.5rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  &:hover {
    cursor: pointer;
    color: ${lightGrey3};
  }

  @media ${device.md} {
    padding: 0.4rem;
  }

  img {
    align-self: baseline;
    opacity: 0.8;
  }
`;
