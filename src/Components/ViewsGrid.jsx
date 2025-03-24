// import React, { useState, useEffect } from "react";
// import "../assets/viewsgrid.css"; // Import styles

// const ViewsGrid = () => {
//     const [viewsData, setViewsData] = useState([]);

//     useEffect(() => {
//         // Fetch from localStorage (if available)
//         const storedData = JSON.parse(localStorage.getItem("viewsData")) || [
//             { title: "Total Views", count: "7,156", change: "+7.2%", color: "#007BFF" },
//             { title: "New Users", count: "1,150", change: "+5.3%", color: "#28A745" },
//             { title: "Bounce Rate", count: "45%", change: "-3.4%", color: "#DC3545" },
//             { title: "Session Duration", count: "2m 30s", change: "+1.8%", color: "#FFC107" }
//         ];
//         setViewsData(storedData);
//     }, []);

//     return (
//         <div className="views-grid">
//             {viewsData.map((view, index) => (
//                 <div key={index} className="view-card" style={{ borderLeftColor: view.color }}>
//                     <h3>{view.title}</h3>
//                     <p className="count">{view.count}</p>
//                     <span className="change">{view.change}</span>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ViewsGrid;