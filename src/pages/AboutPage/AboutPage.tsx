import { FC } from "react";
import { AboutPageContainer, AboutPageText } from "./AboutPage.style";
import { useNavigate } from "react-router-dom";
import { DefinedRoutes } from "../../App";

const AboutPage: FC = () => {
  const navigate = useNavigate();

  return (
    <AboutPageContainer>
      <AboutPageText>
        <p>
          Welcome to My Diary, a place where you can embark on a journey of
          self-reflection, organization and planning. This diary was created
          with the intention of being your sacred place. You can plan your
          meetings ahead, fill in a to-do list and write down your story and
          feelings in the diary. All information will be stored in your
          computer, so you don't have to worry that you will forget about
          something!
        </p>
        <button onClick={() => navigate(DefinedRoutes.ReviewsPage)}>
          See our reviews <span>&rarr;</span>
        </button>
      </AboutPageText>
    </AboutPageContainer>
  );
};

export default AboutPage;
