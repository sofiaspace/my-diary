import { FC } from "react";
import { StyledDatePicker } from "./DatePicker.style";

interface DatePickerProps {
  onChange: (event: any) => void;
  selected: Date;
}

const DatePicker: FC<DatePickerProps> = ({ onChange, selected }) => {
  return (
    <StyledDatePicker
      selected={selected}
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
