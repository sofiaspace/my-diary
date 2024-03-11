import { FC } from "react";
import {
  CommentContainer,
  Img,
  NameContainer,
  Svg,
  UserReviewContainer,
} from "./ReviewsPage.style";

interface UserReviewProps {
  name: string;
  img: string;
  review: string;
}

const UserReview: FC<UserReviewProps> = ({ name, img, review }) => {
  const svgSrc = "star.svg";

  return (
    <UserReviewContainer>
      <Img src={img} alt="User {i}" />
      <CommentContainer>
        {review}
        <NameContainer>
          <span>-{name}</span>
          <span>
            {[...Array(5)].map((_, i) => (
              <Svg key={i} src={svgSrc} alt="star" />
            ))}
          </span>
        </NameContainer>
      </CommentContainer>
    </UserReviewContainer>
  );
};

export default UserReview;
