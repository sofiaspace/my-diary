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
  margin: 6rem 5rem;
  border: solid;
  font-family: "Ms Madi", cursive;
  font-size: 6rem;
  text-align: center;
  animation: ${moveInTop} 2s ease-out;

  @media ${device.lg} {
    font-size: 5rem;
    margin: 4rem 4rem;
  }
  @media ${device.md} {
    font-size: 4.5rem;
    margin: 3rem 4rem;
  }
  @media ${device.sm} {
    font-size: 4rem;
    margin: 3rem 2rem;
  }
`;
