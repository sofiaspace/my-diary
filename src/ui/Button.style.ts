import styled from "styled-components";

export const ButtonContainer = styled.div`
  background-color: rgba(247, 239, 230, 0.8);
  box-shadow: 0 0 0.5rem #a6a6a6;
  padding: 4rem;
  border-radius: 1.3rem;
  cursor: pointer;
  transition: all 0.7s;
  font-size: 1.3rem;

  &:hover {
    box-shadow: 0 0 2.5rem #8d8d8d;
  }

  &.small {
    margin: 0.2rem 0;
    padding: 0.5rem 1rem;
    max-width: min-content;
    align-self: center;
    font-size: 1rem;
  }
`;
