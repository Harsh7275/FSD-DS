import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import './index.css'
//import App from "./App.jsx";
//import Marks from "./Marks.jsx";
import DisplayMarks from "./DisplayMarks.jsx";
import Cards from "./Cards.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DisplayMarks />
    <Cards />
  </StrictMode>
);
