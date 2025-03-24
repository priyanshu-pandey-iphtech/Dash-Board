import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Navbar from "./Navbar";


const Extra = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <Navbar />
            <div className="container" style={{ marginTop: "100px" }}>
                <h1 >Extra Things</h1>
                <p>Welcome to the extra things container!</p>
            </div>
        </>
    );
};

export default Extra;
