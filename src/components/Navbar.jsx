import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    SALUT
                </Link>
            </div>
        </nav>
  );
}