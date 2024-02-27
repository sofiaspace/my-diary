import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import DiaryPage from "./pages/DiaryPage/DiaryPage";
import CustomizePage from "./pages/CustomizePage/CustomizePage";
import TodoPage from "./pages/TodoPage/TodoPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import NavBar from "./pages/HomePage/NavBar";
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage";
import { StyledRoutes } from "./styles/App.style";
import NewMeetingComponent from "./components/meetings/NewMeetingComponent";
import ScheduledMeetings from "./components/meetings/ScheduledMeetings";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <StyledRoutes>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="calendar/new" element={<NewMeetingComponent />} />
          <Route path="calendar/scheduled" element={<ScheduledMeetings />} />
          <Route path="diary" element={<DiaryPage />} />
          <Route path="customize" element={<CustomizePage />} />
          <Route path="todo" element={<TodoPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </StyledRoutes>
    </BrowserRouter>
  );
}

export default App;
