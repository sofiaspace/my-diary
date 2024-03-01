import { FC } from "react";
import { DiaryPageContainer } from "./DiaryPage.style";
import { Button } from "../../ui/Button";
import { useNavigate } from "react-router-dom";

interface DiaryPageProps {}

const DiaryPage: FC<DiaryPageProps> = ({}) => {
  const navigate = useNavigate();
  return (
    <DiaryPageContainer>
      <Button className="small" onClick={() => navigate("/diary/new")}>
        New
      </Button>
    </DiaryPageContainer>
  );
};

export default DiaryPage;
