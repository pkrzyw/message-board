import React from "react";
import Header from "../components/Header";
import Board from "./Board";
import Home from "./Home";
import { Routes, Route } from 'react-router-dom'
import NewBoard from "./NewBoard";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board/:boardName" element={<Board />} />
        <Route path="/board/new" element={<NewBoard />} />
      </Routes>
    </div>
  );
}

export default App;
