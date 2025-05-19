import React from "react";
import {Link} from "react-router-dom";
import './App.css'

const Navbars = function(){
    return(
        <>
            <nav className="navheader">
                <section className="navlinks">
                    <Link to="/">HOME</Link>
                    <Link to="/shop1.js">METAL DICE</Link>
                    <Link to="/shop2.js">LIQUID CORE DICE</Link>
                    <Link to="/cart.js">GO TO CART</Link>
                </section>
            </nav>
        </>
    )
}
export default Navbars