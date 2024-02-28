export const initialState: DiaryState = {
  formData: { meeting: "", location: "", date: "", supplies: "" },
};

export interface DiaryState {
  formData: {
    meeting: string;
    location: string;
    date: string;
    supplies: string;
  };
}
export type DiaryAction =
  | { type: "meetingData"; payload: string }
  | { type: "locationData"; payload: string }
  | { type: "dateData"; payload: string }
  | { type: "suppliesData"; payload: string };

export const DiaryReduce = (state: DiaryState, action: DiaryAction) => {
  switch (action.type) {
    case "meetingData":
      return {
        ...state,
        formData: { ...state.formData, meeting: action.payload },
      };
    case "locationData":
      return {
        ...state,
        formData: { ...state.formData, location: action.payload },
      };
    case "dateData":
      return {
        ...state,
        formData: { ...state.formData, date: action.payload },
      };
    case "suppliesData":
      return {
        ...state,
        formData: { ...state.formData, supplies: action.payload },
      };
    default:
      throw new Error("Unknown Action");
  }
};
