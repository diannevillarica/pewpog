import React from "react";
import Navbar from "./components/Navbar";
import Browse from "./components/Browse";
import Create from "./components/Create";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="text-gray-400 br-gray-900 body-font">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
