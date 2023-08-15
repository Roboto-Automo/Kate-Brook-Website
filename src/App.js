import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Book from "./pages/book";
import Other from "./pages/other";
import Navbar from "./Components/Navbar";
import insta from "./images/insta.jpg";
import twitter from "./images/twitter.jpg";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/other" element={<Other />} />
      </Routes>
      <div className="IconsContainer">
        <a href="https://www.twitter.com/katebrook1">
          <img className="Icon" src={twitter} alt="Icon 2" />
        </a>
        <a href="https://www.instagram.com/kate_br00k/">
          <img className="Icon" src={insta} alt="Icon 1" />
        </a>
      </div>
    </Router>
  );
}

export default App;
