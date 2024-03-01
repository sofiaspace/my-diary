import { FC } from "react";
import { DiaryPageContainer } from "../../pages/DiaryPage/DiaryPage.style";
import useDiaryContext from "../../hooks/useDiaryContext";
import DatePicker from "../../ui/DatePicker";

const NewDiary: FC = () => {
  const { dispatch } = useDiaryContext();
  return (
    <DiaryPageContainer>
      <DatePicker
        onChange={(date: Date) =>
          dispatch({ type: "updateDiaryDate", payload: date })
        }
      />
    </DiaryPageContainer>
  );
};

export default NewDiary;
