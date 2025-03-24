import React from "react";
import { useLocation } from "react-router-dom";
import "../assets/navbar.css";

const Navbar = () => {
    const location = useLocation();

    console.log("Current Path:", location.pathname);


    const formattedPath = location.pathname
        .split("/")
        .filter(segment => segment)
        .map(segment => decodeURIComponent(segment.charAt(0).toUpperCase() + segment.slice(1)))
        .join(" > "); // Join with " > "

    return (
        <div className="navbar">
            <span style={{ fontSize: "18px", fontWeight: "normal" }}>App &gt;</span>
            <span className="url-display">{formattedPath || "Home"}</span>
        </div>
    );
};

export default Navbar;
