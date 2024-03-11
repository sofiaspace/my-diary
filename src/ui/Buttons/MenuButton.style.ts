import styled from "styled-components";
import { backgroundColorPrimary } from "../../styles/variables.style";

export const MenuButtonContainer = styled.div`
  padding: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    padding-left: 0.3rem;
    align-self: end;
    font-size: 1.5rem;
    font-family: "Ms Madi", cursive;
  }
`;

export const StyledMenuButton = styled.button`
  border-radius: 5rem;
  border: none;
  background-color: ${backgroundColorPrimary};
  height: 2.2rem;

  &:hover {
    cursor: pointer;
  }

  img {
    padding: inherit;
    vertical-align: middle;
  }
`;
