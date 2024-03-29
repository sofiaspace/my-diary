import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./styles/GlobalStyles";
import { DiaryProvider } from "./context/DiaryContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DiaryProvider>
      <GlobalStyles />
      <App />
    </DiaryProvider>
  </React.StrictMode>
);
