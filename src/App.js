import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home";
import Book from "./pages/book";
import Other from "./pages/other";
import Navbar from "./Components/Navbar";
import insta from "./images/insta.jpg";
import twitter from "./images/twitter.jpg";
import "./App.css";

function App() {
  let location = useLocation();
  return (
    <div>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} id="home" />
          <Route path="/book" element={<Book />} id="book" />
          <Route path="/other" element={<Other />} id="other" />
        </Routes>
      </AnimatePresence>
      <div className="IconsContainer">
        <a
          href="https://www.twitter.com/katebrook1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="Icon" src={twitter} alt="Icon 2" />
        </a>
        <a
          href="https://www.instagram.com/kate_br00k/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="Icon" src={insta} alt="Icon 1" />
        </a>
      </div>
    </div>
  );
}

export default App;
