import { FC, useState } from "react";
import {
  ScheduledMeeting,
  ScheduledMeetingsContainer,
} from "./ScheduledMeetings.style";
import { dateConverter } from "../../ui/dateConverter";
import Image from "../../ui/DeleteImage";

interface Meetings {
  date: string;
  location: string;
  meeting: string;
  supplies: string;
}

const ScheduledMeetings: FC = () => {
  const formData = window.localStorage.getItem("formData");
  const scheduledMeetings = formData ? JSON.parse(formData) : [];

  const [meetings, setMeetings] = useState<Meetings[]>(scheduledMeetings);

  const handleDelete = (meeting: Meetings) => {
    const updatedList = meetings.filter((d) => d !== meeting);
    setMeetings(updatedList);

    window.localStorage.setItem("formData", JSON.stringify(updatedList));
  };

  return (
    <ScheduledMeetingsContainer>
      {meetings.map((meeting, i) => (
        <ScheduledMeeting key={i}>
          <Image key={i} onClick={() => handleDelete(meeting)} />

          <li>Meeting: {meeting.meeting}</li>
          <li>Date: {dateConverter(meeting.date).toString()}</li>
          <li>Location: {meeting.location}</li>
          <li>Supplies: {meeting.supplies}</li>
        </ScheduledMeeting>
      ))}
    </ScheduledMeetingsContainer>
  );
};

export default ScheduledMeetings;
