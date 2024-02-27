import { FC } from "react";
import {
  MeetingContainer,
  MeetingDataForm,
  MeetingList,
} from "./Meetings.style";
import { Button } from "../../ui/Button";
import useDiaryContext from "../../hooks/useDiaryContext";

interface MeetingDetailsProps {
  date: string;
  time: string;
}

const MeetingDetails: FC<MeetingDetailsProps> = ({ date, time }) => {
  const { dispatch } = useDiaryContext();

  return (
    <MeetingContainer>
      <p>Meeting details:</p>
      <MeetingDataForm>
        <MeetingList>
          <p>Meeting:</p>
          <input
            type="text"
            name="meeting"
            onChange={({ target }) =>
              dispatch({ type: "meetingData", payload: target.value })
            }
          />
          <p>Location:</p>
          <input
            type="text"
            name="location"
            onChange={({ target }) =>
              dispatch({ type: "locationData", payload: target.value })
            }
          />
          <p>When:</p>
          <input
            type="text"
            name="time"
            value={`${date} at ${time}`}
            onChange={({ target }) =>
              dispatch({ type: "dateData", payload: target.value })
            }
          />
          <p>Supplies:</p>
          <input
            type="text"
            name="supplies"
            onChange={({ target }) =>
              dispatch({ type: "suppliesData", payload: target.value })
            }
          />
        </MeetingList>
      </MeetingDataForm>
      <Button
        className="small"
        type="submit"
        // onClick={handleSubmit}
      >
        Add
      </Button>
    </MeetingContainer>
  );
};

export default MeetingDetails;
