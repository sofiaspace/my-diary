import ReactDatePicker from "react-datepicker";
import styled from "styled-components";
import {
  backgroundColorPrimary,
  lightBrown2,
} from "../../styles/variables.style";
import { device } from "../../styles/mediaBreakpoints";

export const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;

  .react-datepicker__input-container {
    position: unset;
  }

  @media ${device.xs} {
    align-self: center;
  }
`;

export const StyledDatePicker = styled(ReactDatePicker)`
  border-radius: 0.5rem;
  box-shadow: 0 0 0.1rem ${lightBrown2};
  padding: 0.5rem 0.7rem;
  text-align: center;
  background-color: ${backgroundColorPrimary};
  border: none;

  &:focus {
    outline: none;
  }
`;
