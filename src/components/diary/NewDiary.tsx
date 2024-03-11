import { FC } from "react";
import { DiaryContainer, DiaryHeader, StyledTextArea } from "./Diary.style";
import useDiaryContext from "../../hooks/useDiaryContext";
import DatePicker from "../../ui/DatePicker/DatePicker";
import { Button } from "../../ui/Buttons/Button";
import { useNavigate } from "react-router-dom";
import { DefinedRoutes } from "../../App";

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
        { diaryDate: state.diaryDate, diaryText: state.diaryText, id },
      ])
    );
    dispatch({ type: "submitData" });
    navigate(DefinedRoutes.OldDiaries);
  };
  return (
    <DiaryContainer>
      <DiaryHeader>
        <span>Select date: </span>
        <DatePicker
          selected={state.diaryDate}
          onChange={(date: Date) =>
            dispatch({ type: "updateDiaryDate", payload: date })
          }
        />
      </DiaryHeader>
      <StyledTextArea
        name="textarea"
        value={state.diaryText}
        onChange={({ target }) =>
          dispatch({ type: "updateDiaryText", payload: target.value })
        }
        rows={30}
        placeholder="Add your story here"
        required
      ></StyledTextArea>
      <Button className="small" type="submit" onClick={handleSubmit}>
        Create
      </Button>
    </DiaryContainer>
  );
};

export default NewDiary;
