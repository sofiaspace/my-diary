import { FC, useState } from "react";
import MeetingDetails from "./MeetingDetails";
import { NewMeetingContainer, StyledDatePicker } from "./Meetings.style";

const NewMeetingComponent: FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());

  const date =
    startDate.getDate() +
    "/" +
    startDate.getMonth() +
    "/" +
    startDate.getFullYear();
  const minutes = startDate.getMinutes();

  const time =
    minutes < 10
      ? startDate.getHours() + ":" + "0" + minutes
      : minutes === 0
      ? startDate.getHours() + ":" + minutes + "0"
      : startDate.getHours() + ":" + minutes;

  return (
    <NewMeetingContainer>
      <StyledDatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
      <MeetingDetails date={date} time={time} />
    </NewMeetingContainer>
  );
};

export default NewMeetingComponent;
