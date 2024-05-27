import React from 'react'

import { Link } from "react-router-dom"

export const Navbar: React.FC = () => {
    return (
        < nav >
            <Link to="/home">Website</Link>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/works">Works</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};