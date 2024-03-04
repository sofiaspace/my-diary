import { FC } from "react";
import { DeleteButtonElement } from "./DeleteButton.style";

interface ImageProps {
  onClick: () => void;
}

const DeleteButton: FC<ImageProps> = ({ onClick }) => {
  const src = "/circle-with-cross.svg";
  return (
    <DeleteButtonElement onClick={onClick}>
      <img src={src} alt="delete" />
    </DeleteButtonElement>
  );
};

export default DeleteButton;
