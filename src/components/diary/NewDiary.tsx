import { FC } from "react";
import { DiaryHeader, NewDiaryContainer, StyledTextArea } from "./Diary.style";
import useDiaryContext from "../../hooks/useDiaryContext";
import DatePicker from "../../ui/DatePicker";
import { Button } from "../../ui/Button";
import { useNavigate } from "react-router-dom";

const NewDiary: FC = () => {
  const { state, dispatch } = useDiaryContext();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = window.localStorage.getItem("diary");
    const diaryData = data ? JSON.parse(data) : [];

    localStorage.setItem(
      "diary",
      JSON.stringify([
        ...diaryData,
        { diaryDate: state.diaryDate, diaryText: state.diaryText },
      ])
    );
    dispatch({ type: "submitData" });
    navigate("/diary/old");
  };
  return (
    <NewDiaryContainer>
      <DiaryHeader>
        <DatePicker
          selected={state.diaryDate}
          onChange={(date: Date) =>
            dispatch({ type: "updateDiaryDate", payload: date })
          }
        />
        <Button className="small" type="submit" onClick={handleSubmit}>
          Create
        </Button>
      </DiaryHeader>
      <StyledTextArea
        name="textarea"
        value={state.diaryText}
        onChange={({ target }) =>
          dispatch({ type: "updateDiaryText", payload: target.value })
        }
        rows={30}
        placeholder="Add your story"
        required
      ></StyledTextArea>
    </NewDiaryContainer>
  );
};

export default NewDiary;
