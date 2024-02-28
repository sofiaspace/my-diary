import {
  Dispatch,
  FC,
  PropsWithChildren,
  Reducer,
  createContext,
  useEffect,
  useReducer,
} from "react";
import {
  DiaryAction,
  DiaryReduce,
  DiaryState,
  initialState,
} from "../reducer/DiaryReducer";

export interface Props {
  dispatch: Dispatch<DiaryAction>;
}

export const DiaryContext = createContext<Props>({} as Props);

export const DiaryProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<DiaryState, DiaryAction>>(
    DiaryReduce,
    initialState
  );

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(state.formData));
  }, [state.formData]);

  return (
    <DiaryContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DiaryContext.Provider>
  );
};
