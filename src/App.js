// src/components/App.js

import React from "react";
import HomePage from "./components/HomePage";
import Ats from "./components/Ats";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ats" element={<Ats />} />
        </Routes>
      </Router>

      <p>© 2023 Yaswanth Panguluri</p>
    </div>
  );
}

export default App;
