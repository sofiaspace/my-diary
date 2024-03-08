import styled from "styled-components";
import { device } from "../../styles/mediaBreakpoints";

export const CalendarPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;

  @media ${device.sm} {
    margin: 0 2rem;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  gap: 2rem;

  @media ${device.xs} {
    display: flex;
    flex-direction: column;
  }
`;
