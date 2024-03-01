import ReactDatePicker from "react-datepicker";
import styled from "styled-components";
import {
  backgroundColorPrimary,
  lightGrey2,
  lightGrey3,
} from "../styles/variables";

export const StyledDatePicker = styled(ReactDatePicker)`
  border: 2px solid ${lightGrey3};
  border-radius: 0.4rem;
  box-shadow: 0 0 0.5rem ${lightGrey2};
  padding: 0.5rem 0.7rem;
  text-align: center;
  background-color: ${backgroundColorPrimary};
`;
