import styled from "styled-components";
import {
  backgroundColorPrimary,
  borderRadiusPrimary,
  darkGrey,
  fontSizePrimary,
  fontSizeSecondary,
  lightGrey2,
} from "../../styles/variables.style";
import { device } from "../../styles/mediaBreakpoints";

export const DiaryContainer = styled.div`
  align-self: center;
  text-align: justify;
  font-size: ${fontSizePrimary};
  background-color: ${backgroundColorPrimary};
  box-shadow: 0 0 0.5rem ${lightGrey2};
  border-radius: ${borderRadiusPrimary};
  width: 70%;
  max-height: 87%;
  padding: 1rem 2rem;
  line-height: 1.7rem;
  overflow: auto;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:first-child {
    border-bottom: ${lightGrey2};
  }

  span {
    font-size: ${fontSizeSecondary};
    text-align: justify;
  }

  @media ${device.sm} {
    padding: 1rem;
    width: 80%;
    font-size: ${fontSizeSecondary};
  }

  @media ${device.md} {
    width: 80%;
  }
`;

export const DiaryData = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(7, 1fr);
  gap: 0.5rem;

  @media ${device.md} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.sm} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.xs} {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const DiaryHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 1rem;
  align-items: center;

  @media ${device.sm} {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`;

export const StyledTextArea = styled.textarea`
  margin-top: 0.6rem;
  background-color: transparent;
  line-height: 2rem;
  font-size: ${fontSizeSecondary};
  font-family: inherit;
  border-style: none;
  resize: none;
  text-align: justify;

  &::placeholder {
    font-size: 1rem;
  }

  &:focus::placeholder {
    color: transparent;
  }

  &:focus {
    outline: ${lightGrey2};
  }
`;

export const DiaryDetailsContainer = styled.div`
  padding: 0.5rem 0rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span {
    text-decoration: underline;
    text-decoration-color: ${darkGrey};
  }
`;
