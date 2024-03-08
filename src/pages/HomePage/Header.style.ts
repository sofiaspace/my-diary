import styled, { keyframes } from "styled-components";
import { device } from "../../styles/mediaBreakpoints";

const moveInTop = keyframes`
0% {
  opacity: 0;
}
100%{
  opacity:1;
}`;

export const HeaderContainer = styled.div`
  margin: 6rem 15rem;
  border: solid;
  font-family: "Ms Madi", cursive;
  font-size: 10rem;
  text-align: center;
  animation: ${moveInTop} 2s ease-out;
  padding: 0 1rem;

  @media ${device.lg} {
    font-size: 9rem;
    margin: 6rem 9.5rem;
  }

  @media ${device.md} {
    font-size: 7rem;
  }
  @media ${device.sm} {
    margin: 2rem 1rem;
  }
  @media ${device.xs} {
    font-size: 4rem;
  }
`;
