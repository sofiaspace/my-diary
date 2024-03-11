import { FC, useEffect, useRef, useState } from "react";
import MenuButton from "../../ui/Buttons/MenuButton";
import { navRoutes } from "../../pages/HomePage/NavBar";
import {
  MobileList,
  MobileNavContainer,
  MobileNavLink,
} from "./MobileNavBar.style";

const MobileNavBar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClick(e: any) {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    }
    if (isOpen) {
      document.addEventListener("click", handleClick, true);
    }
    return () => document.removeEventListener("click", handleClick, true);
  }, [isOpen]);

  return (
    <MobileNavContainer ref={ref}>
      <MenuButton onClick={() => setIsOpen((open) => !open)} toggled={isOpen} />

      {isOpen === true && (
        <MobileList>
          {navRoutes.map((route, i) => (
            <MobileNavLink
              to={route.link}
              key={i}
              onClick={() => setIsOpen(!isOpen)}
            >
              <img src={route.icon} alt="icon" />
              {route.title}
            </MobileNavLink>
          ))}
        </MobileList>
      )}
    </MobileNavContainer>
  );
};

export default MobileNavBar;
