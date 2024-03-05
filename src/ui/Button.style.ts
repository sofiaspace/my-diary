import styled from "styled-components";
import {
  backgroundColorPrimary,
  fontSizePrimary,
  lightBrown,
  lightGrey2,
  lightGrey3,
} from "../styles/variables";

export const ButtonContainer = styled.div`
  background-color: ${backgroundColorPrimary};
  box-shadow: 0 0 0.1rem ${lightGrey2};
  padding: 4rem;
  border-radius: 1.3rem;
  cursor: pointer;
  transition: all 0.7s;
  font-size: ${fontSizePrimary};

  &:hover {
    box-shadow: 0 0 0.5rem ${lightGrey3};
  }

  &.small {
    margin: 0.2rem 0;
    padding: 0.5rem 1rem;
    max-width: min-content;
    align-self: center;
    font-size: 1rem;
    box-shadow: none;
    border: 0.1rem solid ${lightBrown};

    &:hover {
      background-color: ${lightBrown};
    }
  }
  &.medium {
    box-shadow: none;
    font-size: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid ${lightGrey2};
    text-align: center;
  }
`;
