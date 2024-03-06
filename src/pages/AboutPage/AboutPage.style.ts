import styled from "styled-components";
import { fontSizePrimary } from "../../styles/variables";

export const AboutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: ${fontSizePrimary};
`;

export const AboutPageText = styled.div`
  padding: 2rem;
  max-width: 40rem;
  background-color: rgba(247, 239, 230, 0.8);
  box-shadow: 0 0 0.5rem #a6a6a6;
  border-radius: 2rem;
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
      color: #686868;

      span {
        margin-left: 0.4rem;
      }
    }
  }
`;
