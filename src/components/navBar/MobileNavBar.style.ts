import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../styles/mediaBreakpoints";
import { lightGrey1 } from "../../styles/variables.style";

export const MobileNavContainer = styled.div`
  @media ${device.lg}, ${device.xl}, ${device.xxl} {
    display: none;
  }

  @media ${device.sm} {
    display: block;
  }
`;

export const MobileList = styled.div`
  background-color: #f7efe6;
  width: -webkit-fill-available;
  position: absolute;
  margin-top: 0;

  list-style: none;
  font-size: 1rem;
`;

export const MobileNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  padding: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
  border-bottom: thin solid lightgray;

  &:hover {
    background-color: ${lightGrey1};
  }
`;
