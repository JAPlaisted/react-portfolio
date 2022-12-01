import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos";
import Home from "./pages/Home";
import PyTracking from "./pages/PyTracking";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdvantageRoute from "./pages/advantageRoute";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App" id="top">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pyTracking" element={<PyTracking />} />
          <Route path="/advantageRoute" element={<AdvantageRoute />} />
        </Routes>
      </BrowserRouter>
      <a className="top--link" href="#top">
        ˆ
      </a>
    </div>
  );
}

export default App;
