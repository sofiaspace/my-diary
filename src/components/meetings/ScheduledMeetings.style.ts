import styled from "styled-components";
import {
  backgroundColorPrimary,
  lightGrey1,
  lightGrey2,
} from "../../styles/variables";

export const ScheduledMeetingsContainer = styled.div`
  font-size: 1.1rem;
  padding: 10rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 1rem;
`;

export const ScheduledMeeting = styled.div`
  background-color: ${backgroundColorPrimary};
  box-shadow: 0 0 0.5rem ${lightGrey2};
  padding: 1rem 2rem;

  border-radius: 2rem;
  display: flex;
  flex-direction: column;

  li {
    list-style: none;
    border-bottom: 1px solid ${lightGrey1};
    padding-top: 0.3rem;
  }

  img {
    align-self: self-end;

    &:hover {
      cursor: pointer;
    }
  }
`;
