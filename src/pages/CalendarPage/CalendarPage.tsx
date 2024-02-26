import React, { FC, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import {
  CalendarPageContainer,
  MeetingsContainer,
  StyledDatePicker,
} from "./CalendarPage.style";

interface CalendarPageProps {}

const CalendarPage: FC<CalendarPageProps> = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <CalendarPageContainer>
      <StyledDatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
      <MeetingsContainer>
        <p>
          Pick up the date you have your meeting and add all the information
          needed:
        </p>
        <></>
      </MeetingsContainer>
    </CalendarPageContainer>
  );
};

export default CalendarPage;
