import { createGlobalStyle } from "styled-components";
import { device } from "./mediaBreakpoints";
import { darkGrey } from "./variables.style";

const styled = { createGlobalStyle };
export const GlobalStyles = styled.createGlobalStyle`
  html {
    background-image: linear-gradient(
        to right bottom,
        rgb(182, 197, 204, 0.7),
        rgb(212, 221, 225, 0.5)
      ),
      url("https://images.unsplash.com/photo-1516661113161-f17f883f6d91?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    clip-path: polygon(0 0, 0 100%, 100% 75vh, 100% 0);

    @media ${device.sm} {
      clip-path: content-box;
    }
  }
  body {
    margin: 0;
    min-height: 95vh;
    font-size: 62.5%;
    font-family: "Lato", sans-serif;
    box-sizing: border-box;

    background-image: inherit;
    background-size: cover;
    background-position: center;

    @media ${device.lg} {
      font-size: 50%;
    }
  }

  :root {
    overflow: hidden;
    color: ${darkGrey};

    display: flex;
    flex-direction: column;
    gap: 5rem;
    margin: 1rem;
  }
`;
