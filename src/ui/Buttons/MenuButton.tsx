import React, { FC } from "react";
import { MenuButtonContainer, StyledMenuButton } from "./MenuButton.style";

interface MenuButtonProps {
  onClick: () => void;
  toggled: boolean;
}

const MenuButton: FC<MenuButtonProps> = ({ onClick, toggled }) => {
  const src = !toggled ? "/menu.svg" : "/cross.svg";
  return (
    <MenuButtonContainer>
      <StyledMenuButton onClick={onClick}>
        <img src={src} alt="menu" />
      </StyledMenuButton>
      <span>My Diary</span>
    </MenuButtonContainer>
  );
};

export default MenuButton;
