import React from 'react';

const Navbar = (props) => (
    <nav className="navbar navbar-light bg-info">
        <span className="navbar-brand mb-0 h1">Clicky Game</span>
        <span className="navbar-text text-dark font-weight-bold">
            Score: <span>{props.correct}</span>&nbsp;
            Top Score: <span>{props.topScore}</span>
        </span>
    </nav>
)

export default Navbar;