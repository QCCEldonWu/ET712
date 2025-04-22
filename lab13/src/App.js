import './App.css';
import React from 'react';
import Home from './home';
import About from './about';
import Contact from './contact';
import Navbars from './navbars';
import {Route, Routes, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <>
      <h1 className="title">React Routing</h1>
      <BrowserRouter>
        <Navbars/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element ={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
