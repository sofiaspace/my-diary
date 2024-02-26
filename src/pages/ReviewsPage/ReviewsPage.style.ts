import styled from "styled-components";

export const ReviewsPageContainer = styled.div`
  background-color: rgba(247, 239, 230, 0.8);
  box-shadow: 0 0 0.5rem #a6a6a6;

  padding: 1.5rem;
  margin: 4rem;
  border-radius: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Img = styled.img`
  max-height: 5rem;
  max-width: 5rem;
  border-radius: 50%;
  border: 0.1rem solid #fff;
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`;
export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  span {
    color: #686868;
    margin-right: 0.5rem;
  }
`;

export const Svg = styled.img`
  max-height: 0.7rem;
  max-width: 0.7rem;
  opacity: 0.7;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.2rem;

  button {
    border-radius: 50%;
    border: 1px solid #686868;
    width: 0.4rem;
    height: 0.4rem;
    cursor: pointer;

    &:hover {
      background-color: #686868;
    }

    &:active {
      background-color: #686868;
    }
  }
`;
