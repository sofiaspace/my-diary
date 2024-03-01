import React, { FC } from "react";

interface ImageProps {
  onClick: () => void;
}

const Image: FC<ImageProps> = ({ onClick }) => {
  const src = "circle-with-cross.svg";
  return <img src={src} alt="delete" onClick={onClick} />;
};

export default Image;
