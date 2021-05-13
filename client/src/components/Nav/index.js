import React from 'react'
import { Link } from "react-router-dom";
import "./style.css";

export default function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand" to="/">Google Books</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle Navication">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav-item-active">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/saved">Saved</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};


