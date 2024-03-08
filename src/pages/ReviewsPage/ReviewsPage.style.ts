import styled, { css } from "styled-components";
import {
  backgroundColorPrimary,
  fontSizePrimary,
  fontSizeSecondary,
  lightGrey2,
  lightGrey3,
  white,
} from "../../styles/variables";
import { device } from "../../styles/mediaBreakpoints";

export const ReviewsPageContainer = styled.div`
  background-color: ${backgroundColorPrimary};
  box-shadow: 0 0 0.5rem ${lightGrey2};
  padding: 2.5rem;
  border-radius: 2rem;
  font-size: ${fontSizePrimary};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 1rem;

  @media ${device.lg} {
    margin: 0 2rem;
  }
  @media ${device.sm} {
    font-size: ${fontSizeSecondary};
    margin: 0 2rem;
    padding: 1.2rem;
  }
  @media ${device.xs} {
    padding: 1.5rem;
  }
`;

export const Img = styled.img`
  max-height: 9rem;
  max-width: 9rem;
  border-radius: 50%;
  border: 0.1rem solid ${white};

  @media ${device.xs} {
    max-height: 7rem;
    max-width: 7rem;
  }
`;

export const UserReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  @media ${device.xs} {
    display: flex;
    flex-direction: column;
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  text-align: justify;

  span {
    color: ${lightGrey3};
    margin-right: 0.5rem;
  }
`;

export const Svg = styled.img`
  max-height: 1rem;
  max-width: 1rem;
  opacity: 0.7;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.2rem;
`;

export const ReviewButton = styled.button<{ isActive: boolean }>`
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${lightGrey3};
    `}

  border-radius: 50%;
  border: 1px solid ${lightGrey3};
  width: 0.9rem;
  height: 0.9rem;
  cursor: pointer;

  &:hover {
    background-color: ${lightGrey3};
  }
`;
