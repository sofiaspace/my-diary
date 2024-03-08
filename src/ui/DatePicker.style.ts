import ReactDatePicker from "react-datepicker";
import styled from "styled-components";
import { backgroundColorPrimary, lightBrown2 } from "../styles/variables";
import { device } from "../styles/mediaBreakpoints";

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

  @media ${device.sm} {
    padding: 0.4rem;
  }
`;
