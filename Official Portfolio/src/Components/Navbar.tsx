import React, { useState } from 'react'

import { Link, NavLink } from "react-router-dom"

import "./Navbar.css"

export const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        < nav >
            <Link to="/home" className='title'>Ezad Zamily</Link>
            <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/works">Works</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    );
};