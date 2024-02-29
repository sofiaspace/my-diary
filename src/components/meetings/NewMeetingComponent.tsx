import { FC } from "react";
import { NewMeetingContainer } from "./Meetings.style";

const NewMeetingComponent: FC = () => {
  // const [startDate, setStartDate] = useState<Date>(new Date());

  // const date =
  //   startDate.getDate() +
  //   "/" +
  //   startDate.getMonth() +
  //   "/" +
  //   startDate.getFullYear();
  // const minutes = startDate.getMinutes();

  // const time =
  //   minutes < 10
  //     ? startDate.getHours() + ":" + "0" + minutes
  //     : minutes === 0
  //     ? startDate.getHours() + ":" + minutes + "0"
  //     : startDate.getHours() + ":" + minutes;

  return <NewMeetingContainer></NewMeetingContainer>;
};

export default NewMeetingComponent;
