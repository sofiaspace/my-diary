import { FC, useState } from "react";
import {
  ButtonsContainer,
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
          <button key={i} onClick={() => setIsUser(i)} />
        ))}
      </ButtonsContainer>
    </ReviewsPageContainer>
  );
};

export default ReviewsPage;
