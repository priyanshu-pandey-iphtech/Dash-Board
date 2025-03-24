import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Navbar from "./Navbar";


const Core = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <Navbar />
            <div className="container" style={{ marginTop: "100px" }}>
                <h1 >Core</h1>
                <p>Welcome to the core section!</p>
            </div>
        </>
    );
};

export default Core;
