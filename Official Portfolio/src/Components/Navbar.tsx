import React from 'react'

import { Link, NavLink } from "react-router-dom"

import "./Navbar.css"

export const Navbar: React.FC = () => {
    return (
        < nav >
            <Link to="/home" className='title'>Website</Link>
            <ul>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/works">Works</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    );
};