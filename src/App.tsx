import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import CalendarPage from "./components/CalendarPage/CalendarPage";
import DiaryPage from "./components/DiaryPage/DiaryPage";
import CustomizePage from "./components/CustomizePage/CustomizePage";
import TodoPage from "./components/TodoPage/TodoPage";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import NavBar from "./components/HomePage/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="diary" element={<DiaryPage />} />
        <Route path="customize" element={<CustomizePage />} />
        <Route path="todo" element={<TodoPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
