import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../styles/mediaBreakpoints";

export const MobileNavContainer = styled.div`
  @media ${device.lg}, ${device.xl}, ${device.xxl} {
    display: none;
  }

  @media ${device.sm} {
    display: block;
  }
`;

export const MobileList = styled.ul`
  position: absolute;
  padding-left: 1rem;
  list-style: none;
  font-size: 1rem;
  li:not(:last-child) {
    padding-bottom: 0.4rem;
  }
`;

export const MobileNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
`;
