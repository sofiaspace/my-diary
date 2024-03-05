import { FC } from "react";
import { Button } from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { DiaryPageContainer } from "./DiaryPage.style";

const DiaryPage: FC = () => {
  const navigate = useNavigate();

  return (
    <DiaryPageContainer>
      <Button onClick={() => navigate("/diary/new")}>New Diary</Button>
      <Button onClick={() => navigate("/diary/old")}>Old Diaries</Button>
    </DiaryPageContainer>
  );
};

export default DiaryPage;
