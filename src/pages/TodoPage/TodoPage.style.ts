import styled from "styled-components";
import { device } from "../../styles/mediaBreakpoints";

export const TodoPageContainer = styled.div`
  height: 60%;
  width: 60%;

  background-color: rgba(247, 239, 230, 0.8);
  box-shadow: 0 0 0.5rem #a6a6a6;
  border-radius: 2rem;
  text-align: left;
  padding: 1rem 3rem;
  align-self: center;
  font-size: 1.3rem;
  overflow: auto;
  scrollbar-color: #a6a6a6;

  ::-webkit-scrollbar {
    border-radius: 2rem;
  }

  input {
    border: none;
    font: inherit;
    font-size: 1rem;
    background-color: inherit;
    border-bottom: 1px solid #686868;
    padding: 0.1rem;
    transition: 0.5s;

    &:focus-visible {
      outline: 2px solid #686868;
      padding: 0.4rem;
      border-radius: 2rem;
      padding-right: 6rem;

      @media ${device.sm} {
        padding-right: 3rem;
      }
    }

    &:focus::placeholder {
      color: transparent;
    }
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
  border-bottom: 1px solid #cccccc;

  display: flex;
  justify-content: space-between;

  img:hover {
    cursor: pointer;
  }
`;
