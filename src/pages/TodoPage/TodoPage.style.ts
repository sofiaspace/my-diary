import styled from "styled-components";
import { device } from "../../styles/mediaBreakpoints";
import {
  backgroundColorPrimary,
  borderRadiusPrimary,
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
  font-size: 1.1rem;
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
  border: none;
  font: inherit;
  font-size: 1rem;
  background-color: inherit;
  border-bottom: 1px solid ${lightGrey3};
  padding: 0.1rem;
  transition: 0.5s;

  &:focus-visible {
    outline: 2px solid ${lightGrey3};
    padding: 0.4rem;
    border-radius: ${borderRadiusPrimary};
    padding-right: 6rem;

    @media ${device.sm} {
      padding-right: 3rem;
    }
  }

  &:focus::placeholder {
    color: transparent;
  }
`;
