import { FC, useState } from "react";
import { DiaryDataInterface } from "./OldDiaries";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryContainer, DiaryDetailsContainer } from "./Diary.style";
import {
  dateConverter,
  timeConverter,
} from "../../ui/DateConverter/dateConverter";
import DeleteButton from "../../ui/Buttons/DeleteButton";
import { DefinedRoutes } from "../../App";

const DiaryDetails: FC = () => {
  const { id } = useParams();
  const data = window.localStorage.getItem("diary");
  const diary = data ? (JSON.parse(data) as DiaryDataInterface[]) : [];
  const [isDiary, setIsDiary] = useState<DiaryDataInterface[]>(diary);
  const navigate = useNavigate();

  if (id === undefined) {
    return null;
  }

  const day = diary.find((index) => index.id === id);

  if (day === undefined) {
    return null;
  }

  const handleDelete = (id: string) => {
    const updatedDiary = isDiary.filter((d) => d.id !== id);
    setIsDiary(updatedDiary);

    window.localStorage.setItem("diary", JSON.stringify(updatedDiary));
    navigate(DefinedRoutes.OldDiaries);
  };

  return (
    <DiaryContainer>
      <DiaryDetailsContainer>
        <span>
          {dateConverter(day.diaryDate).toString()} at{" "}
          {timeConverter(day.diaryDate).toString()}
        </span>
        <DeleteButton onClick={() => handleDelete(id)} />
      </DiaryDetailsContainer>
      <p>{day.diaryText}</p>
    </DiaryContainer>
  );
};

export default DiaryDetails;
