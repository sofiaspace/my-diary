import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import DiaryPage from "./pages/DiaryPage/DiaryPage";
import TodoPage from "./pages/TodoPage/TodoPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import NavBar from "./pages/HomePage/NavBar";
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage";
import { StyledRoutes } from "./styles/App.style";
import ScheduledMeetings from "./components/meetings/ScheduledMeetings";
import MeetingDetails from "./components/meetings/MeetingDetails";
import NewDiary from "./components/diary/NewDiary";
import OldDiaries from "./components/diary/OldDiaries";
import DiaryDetails from "./components/diary/DiaryDetails";
import MobileNavBar from "./components/navBar/MobileNavBar";

export enum DefinedRoutes {
  AboutPage = "/about",
  CalendarPage = "/calendar",
  NewMeeting = "/calendar/new",
  ScheduledMeetings = "/calendar/scheduled",
  DiaryPage = "/diary",
  NewDiary = "/diary/new",
  OldDiaries = "/diary/old",
  DiaryDetails = "/diary/old/:id",
  TodoPage = "/todo",
  ReviewsPage = "/reviews",
  PageNotFound = "/*",
}

function App() {
  return (
    <BrowserRouter>
      <MobileNavBar />
      <NavBar />
      <StyledRoutes>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path={DefinedRoutes.AboutPage} element={<AboutPage />} />
          <Route path={DefinedRoutes.CalendarPage} element={<CalendarPage />} />
          <Route path={DefinedRoutes.NewMeeting} element={<MeetingDetails />} />
          <Route
            path={DefinedRoutes.ScheduledMeetings}
            element={<ScheduledMeetings />}
          />
          <Route path={DefinedRoutes.DiaryPage} element={<DiaryPage />} />
          <Route path={DefinedRoutes.NewDiary} element={<NewDiary />} />
          <Route path={DefinedRoutes.OldDiaries} element={<OldDiaries />} />
          <Route path={DefinedRoutes.DiaryDetails} element={<DiaryDetails />} />
          <Route path={DefinedRoutes.TodoPage} element={<TodoPage />} />
          <Route path={DefinedRoutes.ReviewsPage} element={<ReviewsPage />} />
          <Route path={DefinedRoutes.PageNotFound} element={<PageNotFound />} />
        </Routes>
      </StyledRoutes>
    </BrowserRouter>
  );
}

export default App;
