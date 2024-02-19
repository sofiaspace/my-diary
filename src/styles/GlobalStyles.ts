import { createGlobalStyle } from "styled-components";
import { device } from "./mediaBreakpoints";

const styled = { createGlobalStyle };
export const GlobalStyles = styled.createGlobalStyle`
  html,
  body {
    margin: 0;
    height: 95vh;
    font-size: 62.5%;
    font-family: "Lato", sans-serif;

    background-image: linear-gradient(
        to right bottom,
        rgb(182, 197, 204, 0.7),
        rgb(212, 221, 225, 0.5)
      ),
      url("https://images.unsplash.com/photo-1516661113161-f17f883f6d91?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    background-size: cover;
    background-position: center;
    clip-path: polygon(0 0, 0 100%, 100% 70vh, 100% 0);
  }

  :root {
    overflow: hidden;
    color: #303030;

    font-size: 2rem;

    display: flex;
    flex-direction: column;
    gap: 5rem;
    margin: 1rem;

    /* @media ${device.md} {
      background-size: cover;
    } */
  }
`;
