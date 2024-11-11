import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import './index.css'
import App from "./App.jsx";
import Marks from "./Marks.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Marks m1={89} m2={90} m3={90} />
  </StrictMode>
);
