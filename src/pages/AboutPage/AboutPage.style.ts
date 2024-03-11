import styled from "styled-components";
import {
  backgroundColorPrimary,
  borderRadiusPrimary,
  fontSizePrimary,
  fontSizeSecondary,
  lightGrey2,
  lightGrey3,
} from "../../styles/variables.style";
import { device } from "../../styles/mediaBreakpoints";

export const AboutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: ${fontSizePrimary};

  @media ${device.md} {
    margin: 0 1.5rem;
  }

  @media ${device.sm} {
    font-size: ${fontSizeSecondary};
  }

  @media ${device.xs} {
    overflow: auto;
    margin-top: 2rem;
  }
`;

export const AboutPageText = styled.div`
  padding: 2rem;
  max-width: 40rem;
  background-color: ${backgroundColorPrimary};
  box-shadow: 0 0 0.5rem ${lightGrey2};
  border-radius: ${borderRadiusPrimary};
  text-align: justify;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  button {
    background-color: transparent;
    border-style: none;
    cursor: pointer;
    font-size: 0.5rem;
    color: inherit;
    border-bottom: 1px solid currentColor;
    padding-bottom: 0.1rem;
    transition: all 0.2s;
    font-size: 1rem;

    & span {
      margin-left: 0.2rem;
      transition: margin-left 0.2s;
    }

    &:hover {
      color: ${lightGrey3};

      span {
        margin-left: 0.4rem;
      }
    }
  }
`;
