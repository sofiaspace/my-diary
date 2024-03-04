import { FC, useState } from "react";
import {
  ButtonsContainer,
  ReviewButton,
  ReviewContainer,
  ReviewsPageContainer,
} from "./ReviewsPage.style";
import UserReview from "./UserReview";

const ReviewsPage: FC = () => {
  const [isUser, setIsUser] = useState<number>(0);

  return (
    <ReviewsPageContainer>
      Reviews:
      <ReviewContainer>
        <UserReview isUser={isUser} />
      </ReviewContainer>
      <ButtonsContainer>
        {[...Array(3)].map((_, i) => (
          <ReviewButton
            key={i}
            onClick={() => setIsUser(i)}
            isActive={i === isUser ?? true}
          />
        ))}
      </ButtonsContainer>
    </ReviewsPageContainer>
  );
};

export default ReviewsPage;
