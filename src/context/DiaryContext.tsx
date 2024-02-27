import {
  Dispatch,
  FC,
  PropsWithChildren,
  createContext,
  useReducer,
} from "react";
import {
  DiaryAction,
  DiaryReduce,
  initialState,
} from "../reducer/DiaryReducer";

export interface Props {
  dispatch: Dispatch<DiaryAction>;
}

export const DiaryContext = createContext<Props>({} as Props);

export const DiaryProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(DiaryReduce, initialState);

  return (
    <DiaryContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DiaryContext.Provider>
  );
};
