import { FC, useState } from "react";
import { Button } from "../../ui/Button";
import { dateConverter } from "../../ui/dateConverter";
import { DiaryData, NewDiaryContainer } from "./Diary.style";

interface DiaryDataInterface {
  diaryDate: string;
  diaryText: string;
}

const OldDiaries: FC = () => {
  const data = window.localStorage.getItem("diary");
  const diaryData = data ? JSON.parse(data) : [];

  const [diary, setDiary] = useState<DiaryDataInterface[]>(diaryData);
  return (
    <NewDiaryContainer>
      <DiaryData>
        {diary.map((data, i) => (
          <Button className="medium" key={i}>
            {dateConverter(data.diaryDate).toString()}
          </Button>
        ))}
      </DiaryData>
    </NewDiaryContainer>
  );
};

export default OldDiaries;
