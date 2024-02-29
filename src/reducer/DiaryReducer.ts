export const initialState: DiaryState = {
  meeting: "",
  location: "",
  date: new Date(),
  supplies: "",
};

export interface DiaryState {
  meeting: string;
  location: string;
  date: Date | null;
  supplies: string;
}
export type DiaryAction =
  | { type: "meetingData"; payload: string }
  | { type: "locationData"; payload: string }
  | { type: "dateData"; payload: Date | null }
  | { type: "submitData" }
  | { type: "suppliesData"; payload: string };

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
    default:
      throw new Error("Unknown Action");
  }
};
