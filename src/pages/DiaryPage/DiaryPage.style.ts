import styled from "styled-components";
import {
  backgroundColorPrimary,
  fontSizePrimary,
  lightGrey2,
} from "../../styles/variables";

export const DiaryPageContainer = styled.div`
  align-self: center;
  font-size: ${fontSizePrimary};
  background-color: ${backgroundColorPrimary};
  box-shadow: 0 0 0.5rem ${lightGrey2};
  border-radius: 2rem;
  width: 70%;
  height: 80%;
  padding: 2rem 2rem 1rem;
`;
