import { FC } from "react";
import { StyledDatePicker } from "./DatePicker.style";
import useDiaryContext from "../hooks/useDiaryContext";

interface DatePickerProps {
  onChange: (event: any) => void;
}

const DatePicker: FC<DatePickerProps> = ({ onChange }) => {
  const { state } = useDiaryContext();

  return (
    <StyledDatePicker
      selected={state.date}
      onChange={onChange}
      popperPlacement="top-start"
      enableTabLoop={false}
      showPopperArrow={false}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
};

export default DatePicker;
