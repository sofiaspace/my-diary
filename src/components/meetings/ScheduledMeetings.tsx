import { FC, useState } from "react";
import {
  ScheduledMeeting,
  ScheduledMeetingsContainer,
} from "./ScheduledMeetings.style";

interface ScheduledMeetingsProps {}

interface Meetings {
  date: string;
  location: string;
  meeting: string;
  supplies: string;
}

const ScheduledMeetings: FC<ScheduledMeetingsProps> = () => {
  const formData = window.localStorage.getItem("formData");
  const scheduledMeetings = formData ? JSON.parse(formData) : [];

  const [meetings, setMeetings] = useState<Meetings[]>(scheduledMeetings);

  return (
    <ScheduledMeetingsContainer>
      {meetings.map((meeting, i) => (
        <ScheduledMeeting key={i}>
          <li>Meeting: {meeting.meeting}</li>
          <li>Date: {meeting.date}</li>
          <li>Location: {meeting.location}</li>
          <li>Supplies: {meeting.supplies}</li>
        </ScheduledMeeting>
      ))}
    </ScheduledMeetingsContainer>
  );
};

export default ScheduledMeetings;
