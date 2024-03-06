import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  backgroundColorPrimary,
  borderRadiusPrimary,
  fontSizeSecondary,
} from "./variables";

export const StyledRoutes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
`;

export const NavLinkButton = styled(NavLink)`
  text-align: center;
  font-size: ${fontSizeSecondary};
  text-decoration: none;
  color: inherit;
  background-color: ${backgroundColorPrimary};
  margin: 0 auto;
  padding: 4rem;
  border-radius: ${borderRadiusPrimary};
  transition: 0.2s ease-in;

  &:hover {
    cursor: pointer;
    background-color: #e4dfd8;
  }
`;
