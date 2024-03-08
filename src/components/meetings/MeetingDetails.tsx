import { FC } from "react";
import { MeetingContainer, MeetingDataForm } from "./Meetings.style";
import { Button } from "../../ui/Button";
import useDiaryContext from "../../hooks/useDiaryContext";
import { useNavigate } from "react-router-dom";
import DatePicker from "../../ui/DatePicker";

const MeetingDetails: FC = () => {
  const { dispatch, state } = useDiaryContext();

  const navigate = useNavigate();

  const onSubmitMultiple = () => {
    const data = window.localStorage.getItem("formData");
    const formData = data ? JSON.parse(data) : [];
    localStorage.setItem("formData", JSON.stringify([...formData, state]));
    dispatch({ type: "submitData" });
    navigate("/calendar/scheduled");
  };

  return (
    <MeetingContainer>
      <span>Meeting details:</span>
      <MeetingDataForm>
        <p>Meeting:</p>
        <input
          type="text"
          name="meeting"
          value={state.meeting}
          onChange={({ target }) =>
            dispatch({ type: "meetingData", payload: target.value })
          }
        />
        <p>Location:</p>
        <input
          type="text"
          name="location"
          value={state.location}
          onChange={({ target }) =>
            dispatch({ type: "locationData", payload: target.value })
          }
        />
        <p>When:</p>
        <DatePicker
          selected={state.date}
          onChange={(date: Date) =>
            dispatch({ type: "dateData", payload: date })
          }
        />
        <p>Supplies:</p>
        <input
          type="text"
          name="supplies"
          value={state.supplies}
          onChange={({ target }) =>
            dispatch({ type: "suppliesData", payload: target.value })
          }
        />
      </MeetingDataForm>
      <Button className="small" type="submit" onClick={onSubmitMultiple}>
        Add
      </Button>
    </MeetingContainer>
  );
};

export default MeetingDetails;
