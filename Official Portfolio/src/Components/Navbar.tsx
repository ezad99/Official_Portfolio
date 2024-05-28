import React, { useState } from 'react'

import { Link, NavLink } from "react-router-dom"

import "./Navbar.css"

export const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        < nav >
            <Link to="/home" className='title'>Website</Link>
            <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/works">Works</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    );
};