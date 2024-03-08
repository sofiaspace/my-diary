import { FC } from "react";
import { DiaryPageContainer } from "./DiaryPage.style";
import { NavLinkButton } from "../../styles/App.style";
import { Options } from "../CalendarPage/CalendarPage.style";

const DiaryPage: FC = () => {
  return (
    <DiaryPageContainer>
      <Options>
        <NavLinkButton to="/diary/new">New Diary</NavLinkButton>
        <NavLinkButton to="/diary/old">Old Diaries</NavLinkButton>
      </Options>
    </DiaryPageContainer>
  );
};

export default DiaryPage;
