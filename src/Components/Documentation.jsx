import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Navbar from "./Navbar";
import "../assets/dashboard.css";

const Documentation = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <Navbar />
            <div className="container" style={{ marginTop: "100px" }}>
                <h1 >Documentation</h1>
                <p>Welcome to the documentation!</p>
            </div>
        </>
    );
};

export default Documentation;
