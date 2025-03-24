import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Navbar from "./Navbar";


const Chart = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <Navbar />
            <div className="container" style={{ marginTop: "100px" }}>
                <h1 >Chart</h1>
                <p>Welcome to the chart section!</p>
            </div>
        </>
    );
};

export default Chart;
