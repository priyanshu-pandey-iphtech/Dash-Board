import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Navbar from "./Navbar";

const Map = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <Navbar />
            <div className="container" style={{ marginTop: "100px" }}>
                <h1 >Map</h1>
                <p>Welcome to the map section!</p>
            </div>
        </>
    );
};

export default Map;
