import { useState } from "react";
import CounterApp from "./components/CounterApp";
import ImageApp from "./components/ImageApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="CounterApp" element={<CounterApp />} />
            <Route path="ImageApp" element={<ImageApp />} />
          </Routes>
        </BrowserRouter>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
