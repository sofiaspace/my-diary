import ReactDatePicker from "react-datepicker";
import styled from "styled-components";
import { backgroundColorPrimary, lightBrown2 } from "../styles/variables";

export const StyledDatePicker = styled(ReactDatePicker)`
  border-radius: 0.5rem;
  box-shadow: 0 0 0.1rem ${lightBrown2};
  padding: 0.5rem 0.7rem;
  text-align: center;
  background-color: ${backgroundColorPrimary};
  border: none;
  font-size: 0.9rem;

  &:focus {
    outline: none;
  }
`;
