import ReactDatePicker from "react-datepicker";
import styled from "styled-components";

export const CalendarPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  max-width: 65%;
`;

export const StyledDatePicker = styled(ReactDatePicker)`
  border: 2px solid #686868;
  border-radius: 0.4rem;
  box-shadow: 0 0 0.5rem #a6a6a6;
  padding: 0.3rem 0.5rem;
  text-align: center;
`;

export const MeetingsContainer = styled.div``;
