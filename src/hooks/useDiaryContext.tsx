import { useContext } from "react";
import { DiaryContext } from "../context/DiaryContext";

const useDiaryContext = () => {
  const context = useContext(DiaryContext);
  if (context === undefined) {
    throw new Error("DiaryContext was used outside DiaryProvider");
  }
  return context;
};

export default useDiaryContext;
