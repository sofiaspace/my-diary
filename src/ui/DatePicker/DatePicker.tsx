import { FC } from "react";
import { DatePickerContainer, StyledDatePicker } from "./DatePicker.style";

interface DatePickerProps {
  onChange: (event: any) => void;
  selected: Date;
}

const DatePicker: FC<DatePickerProps> = ({ onChange, selected }) => {
  return (
    <DatePickerContainer>
      <StyledDatePicker
        selected={selected}
        onChange={onChange}
        popperPlacement="bottom"
        enableTabLoop={false}
        showPopperArrow={false}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    </DatePickerContainer>
  );
};

export default DatePicker;
