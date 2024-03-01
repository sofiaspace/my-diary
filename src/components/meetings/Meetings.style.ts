import styled from "styled-components";
import { device } from "../../styles/mediaBreakpoints";
import {
  fontSizePrimary,
  lightGrey2,
  lightGrey3,
} from "../../styles/variables";

export const NewMeetingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 75%;
  font-size: ${fontSizePrimary};
  align-self: center;

  @media ${device.sm} {
    display: flex;
    flex-direction: column;
  }
  @media ${device.lg} {
    max-width: 90%;
  }
`;

export const MeetingContainer = styled.div`
  background-color: rgba(247, 239, 230, 0.8);
  box-shadow: 0 0 0.5rem ${lightGrey2};
  font-size: ${fontSizePrimary};
  padding: 0.8rem;
  border-radius: 2rem;
  width: 50rem;

  display: flex;
  flex-direction: column;
  align-self: center;

  p {
    text-align: center;
    padding: 0.2rem;
  }
`;

export const MeetingDataForm = styled.form`
  padding-right: 0.4rem;
  p {
    color: ${lightGrey3};
  }
`;

export const MeetingList = styled.div`
  display: grid;
  grid-template-columns: 6rem 2fr;
  align-items: baseline;

  input {
    border: none;
    background-color: inherit;
    border-bottom: 1px solid ${lightGrey2};
    line-height: 0.4rem;
    font-size: 1rem;

    &:focus {
      outline: none;
    }
  }
`;
