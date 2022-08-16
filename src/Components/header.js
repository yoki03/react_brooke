import React from 'react';
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function Header(){
    return (
        <div>
        <BrowserRouter>
        <div className='header'>
            <a className='logo'>BROOKE</a>
            <a><Link to='#home' smooth>Home</Link></a>
            <a><Link to='#about' smooth>About</Link></a>
            <a><Link to='#contact' smooth>Contact</Link></a>
            
        </div>
        </BrowserRouter>
        </div>
    )
}

export default Header;