import { FC } from "react";
import { AboutPageContainer, AboutPageText } from "./AboutPage.style";
import { useNavigate } from "react-router-dom";

const AboutPage: FC = () => {
  const navigate = useNavigate();

  return (
    <AboutPageContainer>
      <AboutPageText>
        <p>
          Welcome to My Diary, a place where you can embark on a journey of
          self-reflection, organization and planning. This diary was created
          with the intention of being your sacred place. You can plan your
          meetings ahead, fill up a to-do list and write down your story and
          feelings in the diary. Don't forget that you can customize the page
          with different colors!{" "}
        </p>
        <button onClick={() => navigate("/reviews")}>
          See our reviews <span>&rarr;</span>
        </button>
      </AboutPageText>
    </AboutPageContainer>
  );
};

export default AboutPage;
