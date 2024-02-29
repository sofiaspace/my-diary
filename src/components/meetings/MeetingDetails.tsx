import { FC } from "react";
import {
  MeetingContainer,
  MeetingDataForm,
  MeetingList,
  StyledDatePicker,
} from "./Meetings.style";
import { Button } from "../../ui/Button";
import useDiaryContext from "../../hooks/useDiaryContext";
import { useNavigate } from "react-router-dom";

const MeetingDetails: FC = () => {
  const { dispatch, state } = useDiaryContext();
  const { meeting, location, supplies, date } = state;
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
      <p>Meeting details:</p>
      <MeetingDataForm>
        <MeetingList>
          <p>Meeting:</p>
          <input
            type="text"
            name="meeting"
            value={meeting}
            onChange={({ target }) =>
              dispatch({ type: "meetingData", payload: target.value })
            }
          />
          <p>Location:</p>
          <input
            type="text"
            name="location"
            value={location}
            onChange={({ target }) =>
              dispatch({ type: "locationData", payload: target.value })
            }
          />
          <p>When:</p>
          <StyledDatePicker
            selected={date}
            onChange={() => dispatch({ type: "dateData", payload: date })}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
          <p>Supplies:</p>
          <input
            type="text"
            name="supplies"
            value={supplies}
            onChange={({ target }) =>
              dispatch({ type: "suppliesData", payload: target.value })
            }
          />
        </MeetingList>
      </MeetingDataForm>
      <Button className="small" type="submit" onClick={onSubmitMultiple}>
        Add
      </Button>
    </MeetingContainer>
  );
};

export default MeetingDetails;
