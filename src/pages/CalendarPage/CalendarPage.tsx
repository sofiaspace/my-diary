import { FC } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarPageContainer, Options } from "./CalendarPage.style";
import { NavLinkButton } from "../../styles/App.style";

const CalendarPage: FC = () => {
  return (
    <CalendarPageContainer>
      <Options>
        <NavLinkButton to="/calendar/new">
          <span>New meeting</span>
        </NavLinkButton>
        <NavLinkButton to="/calendar/scheduled">
          <span>Scheduled meetings</span>
        </NavLinkButton>
      </Options>
    </CalendarPageContainer>
  );
};

export default CalendarPage;
