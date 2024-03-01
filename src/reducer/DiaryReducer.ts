export const initialState: DiaryState = {
  meeting: "",
  location: "",
  date: new Date(),
  supplies: "",
  diaryDate: new Date(),
};

export interface DiaryState {
  meeting: string;
  location: string;
  date: Date;
  supplies: string;
  diaryDate: Date;
}
export type DiaryAction =
  | { type: "meetingData"; payload: string }
  | { type: "locationData"; payload: string }
  | { type: "dateData"; payload: Date }
  | { type: "submitData" }
  | { type: "suppliesData"; payload: string }
  | { type: "updateDiaryDate"; payload: Date };

export const DiaryReduce = (state: DiaryState, action: DiaryAction) => {
  switch (action.type) {
    case "meetingData":
      return {
        ...state,
        meeting: action.payload,
      };
    case "locationData":
      return {
        ...state,
        location: action.payload,
      };
    case "dateData":
      return { ...state, date: action.payload };

    case "suppliesData":
      return {
        ...state,
        supplies: action.payload,
      };
    case "submitData":
      return {
        ...initialState,
      };
    case "updateDiaryDate":
      return {
        ...state,
        diaryDate: action.payload,
      };
    default:
      throw new Error("Unknown Action");
  }
};
