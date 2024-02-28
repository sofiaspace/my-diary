import React, { FC, useState } from "react";
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
  const [meetings, setMeetings] = useState<Meetings[]>([scheduledMeetings]);

  return (
    <ScheduledMeetingsContainer>
      {meetings.map((m, i) => (
        <>
          <ScheduledMeeting key={i}>
            <li>Meeting: {m.meeting}</li> <li>Date: {m.date}</li>
            <li>Location: {m.location}</li> <li>Supplies: {m.supplies}</li>
          </ScheduledMeeting>
        </>
      ))}
    </ScheduledMeetingsContainer>
  );
};

export default ScheduledMeetings;
