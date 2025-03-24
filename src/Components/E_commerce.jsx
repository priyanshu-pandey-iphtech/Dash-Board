import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Navbar from "./Navbar";
import "../assets/e_commerce.css";

const E_commerce = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <Navbar />
            <div className="container" style={{ marginTop: "100px" }}>
                <h1 >E Commerce</h1>
                <p>Welcome to the e-commerce!</p>
            </div>
        </>
    );
};

export default E_commerce;
