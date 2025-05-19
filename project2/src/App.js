import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css';
import React from 'react';
import logo from './images/logo.jpg'
import cart from './images/cart.png'
import Home from './home';
import Shop1 from './shop1';
import Shop2 from './shop2';
import CartPage from './cart'
import Navbars from './navbars';
import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider>
    <div className="App">
      <header className="App-header">
        <img src={logo} className='logo' alt=''></img>
        <img src={cart} className='cartlogo' alt=''></img>
      </header>
      <BrowserRouter>
        <Navbars/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop1.js' element={<Shop1/>}/>
          <Route path='/shop2.js' element={<Shop2/>}/>
          <Route path='/cart.js' element={<CartPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </CartProvider>
  );
}

export default App;
