import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Navbar from "./Navbar";
import "../assets/dashboard.css";

const Dashboard = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <Navbar />
            <div className="container" style={{ marginTop: "100px" }}>
                <h1>Dashboard</h1>
                <p>Welcome to the dashboard!</p>
            </div>
        </>
    );
};

export default Dashboard;
