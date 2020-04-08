import React from "react";
import Header from "./Header";
import MessageBoard from "./MessageBoard";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Board from "./Board";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board/:boardName" element={<MessageBoard />} />
          <Route path="/board/new" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
