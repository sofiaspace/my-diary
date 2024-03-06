import { FC } from "react";
import { Button } from "../../ui/Button";
import { dateConverter } from "../../ui/dateConverter";
import { DiaryContainer, DiaryData } from "./Diary.style";
import { useNavigate } from "react-router-dom";
import { NavLinkButton } from "../../styles/App.style";

export interface DiaryDataInterface {
  diaryDate: string;
  diaryText: string;
  id: string;
}

const OldDiaries: FC = () => {
  const data = window.localStorage.getItem("diary");
  const diary = data ? (JSON.parse(data) as DiaryDataInterface[]) : [];

  const navigate = useNavigate();

  if (diary.length === 0) {
    return (
      <NavLinkButton to="/diary/new">
        Click here to create your first diary memory
      </NavLinkButton>
    );
  }

  return (
    <DiaryContainer>
      <DiaryData>
        {diary.map(({ diaryDate, id }) => (
          <Button
            className="medium"
            key={id}
            onClick={() => navigate(`/diary/old/${id}`)}
          >
            {dateConverter(diaryDate).toString()}
          </Button>
        ))}
      </DiaryData>
    </DiaryContainer>
  );
};

export default OldDiaries;
