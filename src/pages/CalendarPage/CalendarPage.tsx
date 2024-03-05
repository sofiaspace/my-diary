import React, { FC } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarPageContainer, Options } from "./CalendarPage.style";
import { Button } from "../../ui/Button";
import { useNavigate } from "react-router-dom";

interface CalendarPageProps {}

const CalendarPage: FC<CalendarPageProps> = () => {
  const navigate = useNavigate();

  return (
    <CalendarPageContainer>
      <Options>
        <Button onClick={() => navigate("/calendar/new")}>
          Create new meeting
        </Button>
        <Button onClick={() => navigate("/calendar/scheduled")}>
          Scheduled meetings
        </Button>
      </Options>
    </CalendarPageContainer>
  );
};

export default CalendarPage;
