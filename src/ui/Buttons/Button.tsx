import { FC, PropsWithChildren } from "react";
import { ButtonContainer } from "./Button.style";

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
  className?: string;
  type?: string;
}

export const Button: FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <ButtonContainer onClick={onClick} className={className}>
      {children}
    </ButtonContainer>
  );
};
