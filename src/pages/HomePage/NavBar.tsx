import { FC } from "react";
import { NavBarContainer, NavBarList, StyledNavLink } from "./NavBar.style";

export const routes = [
  {
    title: "HOME",
    link: "/",
    icon: "/home.svg",
  },
  {
    title: "ABOUT",
    link: "/about",
    icon: "/info.svg",
  },
  {
    title: "CALENDAR",
    link: "/calendar",
    icon: "/calendar.svg",
  },
  {
    title: "TO-DO",
    link: "/todo",
    icon: "/to-do.svg",
  },
  {
    title: "DIARY",
    link: "/diary",
    icon: "/diary.svg",
  },
];

const NavBar: FC = () => {
  return (
    <NavBarContainer>
      <NavBarList>
        {routes.map((route, i) => (
          <li>
            <StyledNavLink to={route.link} key={i}>
              <img src={route.icon} alt="icon" />
              {route.title}
            </StyledNavLink>
          </li>
        ))}
      </NavBarList>
    </NavBarContainer>
  );
};

export default NavBar;
