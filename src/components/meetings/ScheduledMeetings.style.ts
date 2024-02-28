import styled from "styled-components";

export const ScheduledMeetingsContainer = styled.div`
  font-size: 1.1rem;

  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  padding: 10rem;
  gap: 1rem;
`;

export const ScheduledMeeting = styled.div`
  background-color: rgba(247, 239, 230, 0.8);
  box-shadow: 0 0 0.5rem #a6a6a6;
  padding: 1rem 2rem;

  border-radius: 2rem;
  width: 60%;
  display: flex;
  flex-direction: column;

  li {
    list-style: none;
    border-bottom: 1px solid #cccccc;
  }
`;
