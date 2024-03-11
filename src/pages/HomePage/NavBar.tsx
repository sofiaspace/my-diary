import { FC } from "react";
import { NavBarContainer, NavBarList, StyledNavLink } from "./NavBar.style";

export const navRoutes = [
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
        {navRoutes.map((route, i) => (
          <StyledNavLink to={route.link} key={i}>
            <img src={route.icon} alt="icon" />
            {route.title}
          </StyledNavLink>
        ))}
      </NavBarList>
    </NavBarContainer>
  );
};

export default NavBar;
