import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  backgroundColorPrimary,
  backgroundColorSecondary,
  borderRadiusPrimary,
  fontSizeSecondary,
} from "./variables.style";
import { device } from "./mediaBreakpoints";

export const StyledRoutes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;

  @media ${device.sm} {
    height: 80vh;
  }
`;

export const NavLinkButton = styled(NavLink)`
  font-size: ${fontSizeSecondary};
  text-decoration: none;
  color: inherit;
  background-color: ${backgroundColorPrimary};
  margin: 0 auto;
  padding: 3.5rem;
  border-radius: ${borderRadiusPrimary};
  transition: 0.2s ease-in;
  flex-basis: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.sm} {
    padding: 2.5rem;
  }

  &:hover {
    cursor: pointer;
    background-color: ${backgroundColorSecondary};
  }
`;
