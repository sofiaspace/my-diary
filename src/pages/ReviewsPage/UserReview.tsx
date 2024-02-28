import React, { FC } from "react";
import { CommentContainer, Img, NameContainer, Svg } from "./ReviewsPage.style";

interface UserReviewProps {
  isUser: number;
}

const userReview: {
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

const UserReview: FC<UserReviewProps> = ({ isUser }) => {
  const svgSrc = "star.svg";

  return (
    <>
      <Img src={userReview[isUser].img} alt="User {i}" />
      <CommentContainer>
        {userReview[isUser].review}
        <NameContainer>
          <span>-{userReview[isUser].name}</span>
          {[...Array(5)].map((_, i) => (
            <Svg key={i} src={svgSrc} alt="star" />
          ))}
        </NameContainer>
      </CommentContainer>
    </>
  );
};

export default UserReview;
