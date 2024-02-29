import {
  Dispatch,
  FC,
  PropsWithChildren,
  Reducer,
  createContext,
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
  state: DiaryState;
}

export const DiaryContext = createContext<Props>({} as Props);

export const DiaryProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<DiaryState, DiaryAction>>(
    DiaryReduce,
    initialState
  );

  // const onSubmit = () => {
  //   localStorage.setItem("formData", JSON.stringify(state));
  //   dispatch({ type: "submitData" });
  // };

  return (
    <DiaryContext.Provider value={{ state, dispatch }}>
      {children}
    </DiaryContext.Provider>
  );
};
