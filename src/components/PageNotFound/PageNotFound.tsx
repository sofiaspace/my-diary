import { FC } from "react";
import { PageNotFoundContainer } from "./PageNotFound.style";

const PageNotFound: FC = () => {
  return (
    <PageNotFoundContainer>
      Oops! It seems like the page you're looking for doesn't exist or has been
      moved elsewhere.
    </PageNotFoundContainer>
  );
};

export default PageNotFound;
