import React from "react";
import Header from "./Header";
import MessageBoard from "./MessageBoard";
import Home from "./Home";
import { Routes, Route } from 'react-router-dom'
import CreateBoard from "./CreateBoard";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board/:boardName" element={<MessageBoard />} />
        <Route path="/board/new" element={<CreateBoard />} />
      </Routes>
    </div>
  );
}

export default App;
