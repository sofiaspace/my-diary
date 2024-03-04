import styled from "styled-components";
import {
  backgroundColorPrimary,
  borderRadiusPrimary,
  fontSizePrimary,
  fontSizeSecondary,
  lightGrey2,
} from "../../styles/variables";

export const NewDiaryContainer = styled.div`
  align-self: center;
  font-size: ${fontSizePrimary};
  background-color: ${backgroundColorPrimary};
  box-shadow: 0 0 0.5rem ${lightGrey2};
  border-radius: ${borderRadiusPrimary};
  width: 70%;
  height: 80%;
  padding: 1rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:first-child {
    border-bottom: ${lightGrey2};
  }
`;

export const DiaryData = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(7, 1fr);
  gap: 1rem;
`;

export const DiaryHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const StyledTextArea = styled.textarea`
  margin-top: 0.6rem;
  background-color: transparent;
  line-height: 2.5rem;
  font-size: ${fontSizeSecondary};
  font-family: inherit;
  border-style: none;
  resize: none;
  width: 100%;

  &::placeholder {
    padding-left: 0.7rem;
  }
`;
