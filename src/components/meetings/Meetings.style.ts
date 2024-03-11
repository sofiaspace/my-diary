import styled from "styled-components";
import { device } from "../../styles/mediaBreakpoints";
import {
  backgroundColorPrimary,
  borderRadiusPrimary,
  fontSizePrimary,
  fontSizeSecondary,
  lightGrey2,
  lightGrey3,
} from "../../styles/variables.style";

export const MeetingContainer = styled.div`
  background-color: ${backgroundColorPrimary};
  box-shadow: 0 0 0.5rem ${lightGrey2};
  font-size: ${fontSizePrimary};
  padding: 0.8rem;
  border-radius: ${borderRadiusPrimary};
  width: 50rem;

  display: flex;
  flex-direction: column;
  align-self: center;

  span {
    padding: 1rem 0;
    text-align: center;
  }

  p {
    text-align: left;
    padding: 0.2rem;
  }

  @media ${device.lg} {
    max-width: 80%;
  }

  @media ${device.sm} {
    font-size: ${fontSizeSecondary};
  }
`;

export const MeetingDataForm = styled.form`
  padding-right: 0.4rem;
  color: ${lightGrey3};

  display: grid;
  grid-template-columns: 6rem 2fr;
  align-items: baseline;

  @media ${device.md} {
    grid-template-columns: 5.7rem 2fr;
  }
  @media ${device.xs} {
    display: flex;
    flex-direction: column;
    align-items: unset;
    margin-bottom: 0.5rem;
  }

  input {
    border: none;
    background-color: inherit;
    border-bottom: 1px solid ${lightGrey2};
    line-height: 0.4rem;
    font-size: 1rem;
    background-clip: text;

    @media ${device.sm} {
      max-width: 100%;
    }

    &:focus {
      outline: none;
    }
  }
`;
