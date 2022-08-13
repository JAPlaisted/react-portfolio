import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos";
import Home from "./pages/Home";
import PyTracking from "./pages/PyTracking";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pyTracking" element={<PyTracking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
