export const initialState: DiaryState = {
  meeting: [],
  location: [],
  date: [],
  supplies: [],
};

export interface DiaryState {
  meeting: string[];
  location: string[];
  date: string[];
  supplies: string[];
}
export type DiaryAction =
  | { type: "meetingData"; payload: string }
  | { type: "locationData"; payload: string }
  | { type: "dateData"; payload: string }
  | { type: "suppliesData"; payload: string };

export const DiaryReduce = (state: DiaryState, action: DiaryAction) => {
  switch (action.type) {
    case "meetingData":
      return { ...state, meeting: [...state.meeting, action.payload] };
    case "locationData":
      return { ...state, location: [...state.location, action.payload] };
    case "dateData":
      return { ...state, date: [...state.date, action.payload] };
    case "suppliesData":
      return { ...state, supplies: [...state.supplies, action.payload] };
    default:
      throw new Error("Unknown Action");
  }
};
