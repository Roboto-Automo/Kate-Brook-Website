import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Book from './pages/book';
import Other from './pages/other';
import Navbar from './Components/Navbar';
import insta from './images/insta.jpg';
import twitter from './images/twitter.jpg';
import './App.css';

function App() {
  return (
    <Router>  
    <Navbar />
    <div className="IconsContainer">
                    <img className="Icon" src={twitter} alt="Icon 2" />
                    <img className="Icon" src={insta} alt="Icon 1" />
                </div>
    <Routes>  
    <Route exact path='/' element={<Home />} />
        <Route path='/book' element={<Book/>} />
        <Route path='/other' element={<Other/>} />
    </Routes> 
    </Router>
  );
}

export default App;
