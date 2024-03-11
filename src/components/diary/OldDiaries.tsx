import { FC } from "react";
import { Button } from "../../ui/Buttons/Button";
import { dateConverter } from "../../ui/DateConverter/dateConverter";
import { DiaryContainer, DiaryData } from "./Diary.style";
import { useNavigate } from "react-router-dom";
import { NavLinkButton } from "../../styles/App.style";
import { DefinedRoutes } from "../../App";

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
            onClick={() => navigate(`${DefinedRoutes.OldDiaries}/${id}`)}
          >
            {dateConverter(diaryDate).toString()}
          </Button>
        ))}
      </DiaryData>
    </DiaryContainer>
  );
};

export default OldDiaries;
