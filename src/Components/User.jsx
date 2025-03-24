import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Navbar from "./Navbar";
import "../assets/user.css";

const User = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <Navbar />
            <div className="container" style={{ marginTop: "100px" }}>
                <h1 >User</h1>
                <p>Welcome to the user page!</p>
            </div>
        </>
    );
};

export default User;
