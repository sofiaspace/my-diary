import styled from "styled-components";
import { device } from "../../styles/mediaBreakpoints";
import ReactDatePicker from "react-datepicker";

export const NewMeetingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 75%;
  font-size: 0.6rem;
  align-self: center;

  @media ${device.sm} {
    display: flex;
    flex-direction: column;
  }
  @media ${device.lg} {
    max-width: 90%;
  }
`;

export const StyledDatePicker = styled(ReactDatePicker)`
  border: 2px solid #686868;
  border-radius: 0.4rem;
  box-shadow: 0 0 0.5rem #a6a6a6;
  padding: 0.3rem 0.5rem;
  text-align: center;
  background-color: rgba(247, 239, 230, 0.8);
  margin-right: 2rem;

  @media ${device.md} {
    margin-right: 0.5rem;
  }
`;

export const MeetingContainer = styled.div`
  background-color: rgba(247, 239, 230, 0.8);
  box-shadow: 0 0 0.5rem #a6a6a6;
  padding: 0.5rem;
  border-radius: 2rem;
  width: 30rem;
  display: flex;
  flex-direction: column;

  p {
    text-align: center;
    padding: 0.2rem;
  }
`;

export const MeetingDataForm = styled.form`
  padding-right: 0.4rem;
  p {
    color: #686868;
  }
`;

export const MeetingList = styled.div`
  display: grid;
  grid-template-columns: 4rem 2fr;
  align-items: baseline;

  input {
    border: none;
    background-color: inherit;
    border-bottom: 1px solid #cccccc;
    line-height: 0.4rem;
    font-size: 0.5rem;

    &:focus {
      outline: none;
    }
  }
`;
