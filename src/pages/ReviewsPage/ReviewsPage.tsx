import { FC, useState } from "react";
import {
  ButtonsContainer,
  ReviewButton,
  ReviewsPageContainer,
} from "./ReviewsPage.style";
import UserReview from "./UserReview";

const ReviewsPage: FC = () => {
  const [isUser, setIsUser] = useState<number>(0);

  const userReviews: {
    name: string;
    img: string;
    review: string;
  }[] = [
    {
      name: "Maria Lopez",
      img: "user-2.jpg",
      review: "Easy to use, great to store scheduled meetings and todo things.",
    },
    {
      name: "Mike Johnson",
      img: "user-3.jpg",
      review: "I love this website. It's amazing, easy to use and helpful.",
    },
    {
      name: "Angela Smith",
      img: "user-6.jpg",
      review:
        "Helps organize my daily activities as well as numerous other uses. Great website!",
    },
  ];

  return (
    <ReviewsPageContainer>
      Reviews:
      <UserReview
        name={userReviews[isUser].name}
        review={userReviews[isUser].review}
        img={userReviews[isUser].img}
      />
      <ButtonsContainer>
        {userReviews.map((_, i) => (
          <ReviewButton
            key={i}
            onClick={() => setIsUser(i)}
            isActive={i === isUser}
          />
        ))}
      </ButtonsContainer>
    </ReviewsPageContainer>
  );
};

export default ReviewsPage;
