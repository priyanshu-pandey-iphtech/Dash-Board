import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Navbar from "./Navbar";

const UI_element = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <Navbar />
            <div className="container" style={{ marginTop: "100px" }}>
                <h1 >UI Element</h1>
                <p>Welcome to the UI Element Page!</p>
            </div>
        </>
    );
};

export default UI_element;
