import React from "react";
import Header from "./Header";
import MessageBoard from "./MessageBoard";
import { Router } from '@reach/router'
import Home from "./Home";
import Board from "./Board";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Home path="/" />
        <MessageBoard path="/board/:name" />
        <Board path="/board/new" />
      </Router>
    </div>
  );
}

export default App;
