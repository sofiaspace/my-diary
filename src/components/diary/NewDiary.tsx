import { FC } from "react";
import { DiaryContainer, DiaryHeader, StyledTextArea } from "./Diary.style";
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

    const id = Date.now().toString();

    localStorage.setItem(
      "diary",
      JSON.stringify([
        ...diaryData,
        { diaryDate: state.diaryDate, diaryText: state.diaryText, id: id },
      ])
    );
    dispatch({ type: "submitData" });
    navigate("/diary/old");
  };
  return (
    <DiaryContainer>
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
    </DiaryContainer>
  );
};

export default NewDiary;
