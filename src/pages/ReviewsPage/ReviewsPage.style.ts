import styled from "styled-components";

export const ReviewsPageContainer = styled.div`
  background-color: rgba(247, 239, 230, 0.8);
  box-shadow: 0 0 0.5rem #a6a6a6;
  padding: 2.5rem;
  margin: 16rem;
  border-radius: 2rem;
  font-size: 1.3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Img = styled.img`
  max-height: 9rem;
  max-width: 9rem;
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
    width: 0.9rem;
    height: 0.9rem;
    cursor: pointer;

    &:hover {
      background-color: #686868;
    }

    &:active {
      background-color: #686868;
    }
  }
`;
