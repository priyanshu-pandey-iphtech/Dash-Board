import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Navbar from "./Navbar";


const Menu_level = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <Navbar />
            <div className="container" style={{ marginTop: "100px" }}>
                <h1 >Menu_level</h1>
                <p>Welcome to the menu_level!</p>
            </div>
        </>
    );
};

export default Menu_level;
