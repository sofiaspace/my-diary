import styled from "styled-components";
import {
  backgroundColorPrimary,
  borderRadiusPrimary,
  fontSizePrimary,
  fontSizeSecondary,
  lightGrey2,
  lightGrey3,
} from "../../styles/variables";
import { device } from "../../styles/mediaBreakpoints";

export const DiaryContainer = styled.div`
  align-self: center;
  text-align: center;
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

  p {
    font-size: ${fontSizeSecondary};
    text-align: justify;
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
  justify-content: space-around;
  align-items: center;

  @media ${device.sm} {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
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
    padding-left: 3rem;
    font-size: 1rem;

    @media ${device.sm} {
      padding-left: 0;
    }
  }

  &:focus::placeholder {
    color: transparent;
  }

  &:focus {
    outline: ${lightGrey2};
  }
`;

export const DiaryDetailsContainer = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span {
    text-decoration: underline;
    text-decoration-color: ${lightGrey3};
  }
`;
