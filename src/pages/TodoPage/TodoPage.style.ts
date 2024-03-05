import styled from "styled-components";
import {
  backgroundColorPrimary,
  borderRadiusPrimary,
  fontSizeSecondary,
  lightGrey1,
  lightGrey2,
  lightGrey3,
} from "../../styles/variables";

export const TodoPageContainer = styled.div`
  height: 60%;
  width: 60%;

  background-color: ${backgroundColorPrimary};
  box-shadow: 0 0 0.5rem ${lightGrey2};
  border-radius: ${borderRadiusPrimary};
  text-align: left;
  padding: 1rem 3rem;
  align-self: center;
  font-size: ${fontSizeSecondary};
  overflow: auto;
  scrollbar-color: ${lightGrey2};

  ::-webkit-scrollbar {
    border-radius: ${borderRadiusPrimary};
  }
`;

export const TodoList = styled.div`
  padding-top: 1.3rem;
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 0.6rem;
`;

export const TodoItem = styled.li`
  list-style: none;
  border-bottom: 1px solid ${lightGrey1};

  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  font-family: inherit;
  font-size: 1rem;
  padding: 0.1rem;
  width: 50%;
  border: 0;
  border-bottom: 2px solid ${lightGrey3};
  outline: 0;
  color: ${lightGrey3};
  background: transparent;
  background-clip: text;

  &:placeholder-shown {
    font-size: 0.9rem;
    color: ${lightGrey3};
    cursor: text;
  }

  &:focus::placeholder {
    padding-left: 0.3rem;
    background: transparent;
  }
`;
