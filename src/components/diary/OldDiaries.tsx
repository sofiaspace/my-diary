import { FC } from "react";
import { Button } from "../../ui/Button";
import { dateConverter } from "../../ui/dateConverter";
import { DiaryContainer, DiaryData } from "./Diary.style";
import { useNavigate } from "react-router-dom";
import { Options } from "../../pages/CalendarPage/CalendarPage.style";
import { DiaryPageContainer } from "../../pages/DiaryPage/DiaryPage.style";

export interface DiaryDataInterface {
  diaryDate: string;
  diaryText: string;
  id: string;
}

const OldDiaries: FC = () => {
  const data = window.localStorage.getItem("diary");
  const diary = data ? (JSON.parse(data) as DiaryDataInterface[]) : [];

  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/diary/old/${id}`);
  };

  if (diary.length === 0) {
    return (
      <DiaryPageContainer>
        <Options>
          <Button onClick={() => navigate("/diary/new")}>
            Create your first diary memory
          </Button>
        </Options>
      </DiaryPageContainer>
    );
  }

  return (
    <DiaryContainer>
      <DiaryData>
        {diary.map(({ diaryDate, id }) => (
          <Button className="medium" key={id} onClick={() => handleClick(id)}>
            {dateConverter(diaryDate).toString()}
          </Button>
        ))}
      </DiaryData>
    </DiaryContainer>
  );
};

export default OldDiaries;
