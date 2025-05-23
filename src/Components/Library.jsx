import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Navbar from "./Navbar";

const Library = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <Navbar />
            <div className="container" style={{ marginTop: "100px" }}>
                <h1 >Library</h1>
                <p>Welcome to the Library!</p>
            </div>
        </>
    );
};

export default Library;
