import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Book from './pages/book';
import Other from './pages/other';
import './App.css';

function App() {
  return (
    <Router>  
    <Routes>  
    <Route exact path='/' element={<Home />} />
        <Route path='/book' element={<Book/>} />
        <Route path='/other' element={<Other/>} />
    </Routes> 
    </Router>
  );
}

export default App;
