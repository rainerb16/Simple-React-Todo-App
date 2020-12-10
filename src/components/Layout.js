import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1 id="main-title">To-Do List</h1>
            <div className="links">
                <Link className="link-item" to="/">Home</Link> | <Link className="link-item" to="/about">About</Link>
            </div>
        </header>
    )
}

export default Header;