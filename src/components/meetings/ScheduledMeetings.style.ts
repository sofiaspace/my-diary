import styled from "styled-components";
import {
  backgroundColorPrimary,
  borderRadiusPrimary,
  fontSizeSecondary,
  lightGrey1,
  lightGrey2,
} from "../../styles/variables";
import { device } from "../../styles/mediaBreakpoints";

export const ScheduledMeetingsContainer = styled.div`
  font-size: ${fontSizeSecondary};
  margin: 2rem 7rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 1rem;
  overflow: auto;

  @media ${device.lg} {
    margin: 2rem 2rem;
  }
  @media ${device.sm} {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: normal;
    overflow: auto;
  }
`;

export const ScheduledMeeting = styled.div`
  background-color: ${backgroundColorPrimary};
  box-shadow: 0 0 0.5rem ${lightGrey2};
  padding: 1rem 2rem;
  border-radius: ${borderRadiusPrimary};

  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  li {
    list-style: none;
    border-bottom: 1px solid ${lightGrey1};

    &:nth-child(2) {
      margin-top: -0.8rem;
    }
  }
`;
