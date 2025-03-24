import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../assets/profile.css";
import dp from '../assets/dp.jpg';
import { FaFacebookF } from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBriefcase, FaLock, FaUsers } from "react-icons/fa";
import { PiFolderSimpleFill } from "react-icons/pi";
import { PieChart, Pie, Cell, Tooltip, Legend, LineChart } from "recharts";
import { BsFileEarmarkPostFill } from "react-icons/bs";
import { FaImages, FaVideo, FaMusic, FaFolder } from "react-icons/fa";
import Navbar from "./Navbar";
import { LuUserPlus, LuUsers } from "react-icons/lu";
import { BiFolder, BiImage, BiLock } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { CiBasketball } from "react-icons/ci";
import { IoIosTrendingUp } from "react-icons/io";




const data = [
    { name: "New", value: 40, color: "#5172f9" },
    { name: "In Progress", value: 30, color: "#ffbf67" },
    { name: "Completed", value: 25, color: "#44cd9e" },
    { name: "Cancel", value: 26, color: "#fc5c92" }
];

const mediaData = [
    {
        id: 1,
        type: "Posts",
        count: 194,
        icon: (
            <div className="media-icon-container media-icon-green">
                <BsFileEarmarkPostFill />
            </div>
        )
    },
    {
        id: 2,
        type: "Projects",
        count: 554,
        icon: (
            <div className="media-icon-container media-icon-pink">
                <FaImages />
            </div>
        )
    },
    {
        id: 3,
        type: "Followers",
        count: "12.8k",
        icon: (
            <div className="media-icon-container media-icon-blue">
                <LuUsers />
            </div>
        )
    },
    {
        id: 4,
        type: "Following",
        count: "1.1k",
        icon: (
            <div className="media-icon-container media-yellow">
                <LuUserPlus />
            </div>
        )
    },
];

const tasksData = {
    today: [
        { time: "09:00 AM", color: "#FF5733", task: "Call conference" },
        { time: "11:30 AM", color: "#33A1FF", task: "Presentation demo" },
        { time: "03:00 PM", color: "pink", task: "Call with PR manager" },
        { time: "03:00 PM", color: "yellow", task: "Interview a new UI/UX" },
        { time: "03:00 PM", color: "#28A845", task: "Call a conference" },
        { time: "03:00 PM", color: "red", task: "Client call" },
        { time: "09:00 AM", color: "#FF5733", task: "Call conference" },
        { time: "11:30 AM", color: "#33A1FF", task: "Presentation demo" },
        { time: "03:00 PM", color: "pink", task: "Call with PR manager" },
        { time: "03:00 PM", color: "yellow", task: "Interview a new UI/UX" },
        { time: "03:00 PM", color: "#28A845", task: "Call a conference" },
        { time: "03:00 PM", color: "red", task: "Client call" },
    ],
    week: [
        { time: "Mon", color: "#FF5733", task: "Project Planning" },
        { time: "Wed", color: "#33A1FF", task: "Design Review" },
        { time: "Fri", color: "#28A745", task: "Deployment" },
        { time: "Wed", color: "#33A1FF", task: "Design" },
        { time: "Friday", color: "#28A745", task: "Deployment" },
        { time: "Mon", color: "#FF5733", task: "Project Review" },
        { time: "Mon", color: "#FF5733", task: "Project Planning" },
        { time: "Wed", color: "#33A1FF", task: "Design Review" },
        { time: "Fri", color: "#28A745", task: "Deployment" },
        { time: "Wed", color: "#33A1FF", task: "Design" },
        { time: "Friday", color: "#28A745", task: "Deployment" },
        { time: "Mon", color: "#FF5733", task: "Project Review" },
    ],
    month: [
        { time: "Week 1", color: "#FF5733", task: "Research" },
        { time: "Week 2", color: "#33A1FF", task: "Prototype" },
        { time: "Week 3", color: "#28A745", task: "Testing" },
        { time: "Week 4", color: "#FF5733", task: "Strategy" },
        { time: "Week 5", color: "#33A1FF", task: "Development" },
        { time: "Week 6", color: "#28A745", task: "Feedback" },
        { time: "Week 1", color: "#FF5733", task: "Research" },
        { time: "Week 2", color: "#33A1FF", task: "Prototype" },
        { time: "Week 3", color: "#28A745", task: "Testing" },
        { time: "Week 4", color: "#FF5733", task: "Strategy" },
        { time: "Week 5", color: "#33A1FF", task: "Development" },
        { time: "Week 6", color: "#28A745", task: "Feedback" },
    ],

};
const viewsData = [
    { name: "Mon", views: 5000 },
    { name: "Tue", views: 6000 },
    { name: "Wed", views: 5500 },
    { name: "Thu", views: 7200 },
    { name: "Fri", views: 6900 },
    { name: "Sat", views: 7156 },
    { name: "Sun", views: 7300 }];
const starterKits = [
    {
        title: "NativeBase Starter Kit",
        description: "A great starter kit with UI components.",
        image: "data:image/jpeg;base64,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",
    },
    {
        title: "React Native Paper",
        description: "Material design UI for React Native.",
        image: "https://miro.medium.com/v2/resize:fit:960/1*t52RNYvVeih_9YdsM8Dxwg.png",
    },
    {
        title: "Expo Starter Kit",
        description: "Expo-powered starter template.",
        image: "https://flatlogic.com/blog/wp-content/uploads/2019/01/RNS_Article_blog-Copy-1024x768.png",
    },
    {
        title: "React Native Elements",
        description: "Cross-platform UI toolkit.",
        image: "https://store.enappd.com/wp-content/uploads/2019/04/banner70x70-280x280.png",
    },
    {
        title: "Ignite CLI",
        description: "Powerful React Native starter.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHXAk3tcJRLl98smGBZhwOlLnbTVSHap9FLVjK6XkzcrUUGxuRjNrEp9l3YPnnWfyQaNs&usqp=CAU",
    },
];


const Dashboard = () => {
    const [date, setDate] = useState(new Date());
    const [activeFileTab, setActiveFileTab] = useState("work");
    const [activeTab, setActiveTab] = useState("today");

    return (
        <>

            <Header />
            <Sidebar />
            <Navbar />
            <div className="dashboard-container">
                <div className="settings-icon">
                    <FiSettings />
                </div>


                <div className="container">
                    <div className="card profile">
                        <div className="profile-info">
                            {/* <img src={dp} alt="Profile Picture" className="profilep" />
                            <button>PRO</button> */}
                            <div className="profile_container"><img src={dp} alt="Profile Picture" className="profilep" />
                                <button className="pro_btn">PRO</button></div>


                            <div className="profile_description">
                                <h2>Julee Cruise</h2>
                                <p>Product Designer</p>
                                <p style={{ color: "blue" }}>Flatlogic.com</p>
                                <div className="all_btn">
                                    <button style={{
                                        color: "#98aafa",
                                        backgroundColor: "#c6d0fd",
                                        border: "1px dotted #98aafa"
                                    }}>
                                        UI/UX
                                    </button>
                                    <button style={{
                                        color: "#ffce87",
                                        backgroundColor: "#fff0db",
                                        border: "1px dotted #ffce87"
                                    }}>
                                        Art
                                    </button>
                                    <button style={{
                                        color: "#fd83ac",
                                        backgroundColor: "#f4d9e5",
                                        border: "1px dotted #f4d9e5"
                                    }}>
                                        Design
                                    </button>
                                    <button style={{
                                        color: "#ffce87",
                                        backgroundColor: "#fff0db",
                                        border: "1px dotted #ffce87"
                                    }}>
                                        Illustration
                                    </button>
                                    <button style={{
                                        color: "#78dfbc",
                                        backgroundColor: "#c2f1e1",
                                        border: "1px dotted #78dfbc"
                                    }}>
                                        Mobile
                                    </button>
                                </div>
                                <div className="icons">
                                    <FaFacebookF />
                                    <FaMediumM />
                                    <CiBasketball />
                                    <FaBehance />
                                    <FaInstagram />

                                </div>
                            </div>

                        </div>


                    </div>
                    <div className="card files">
                        <h2 className="grid-heading">Files</h2>
                        <div className="file-tabs">
                            <button className={activeFileTab === "work" ? "active" : ""} onClick={() => setActiveFileTab("work")}>Work</button>
                            <button className={activeFileTab === "private" ? "active" : ""} onClick={() => setActiveFileTab("private")}>Private</button>
                            <button className={activeFileTab === "social" ? "active" : ""} onClick={() => setActiveFileTab("social")}>Social</button>
                        </div>
                        <div className="tab-indicator" style={{ left: activeFileTab === "work" ? "0%" : activeFileTab === "private" ? "33.3%" : "66.6%" }}></div>

                        <div className="file-content">
                            {activeFileTab === "work" && (
                                <div className="file-item">
                                    <div className="file-container">
                                        <p className="file-label">UI/UX<br />112 files</p>
                                        <FaFolder className="file-icon-1" size={120} style={{ color: "#a6b5fc" }} />
                                        <BiFolder className="file-icon-2" />
                                    </div>
                                    <div className="file-container">
                                        <p className="file-label">Design<br />178 files</p>
                                        <FaFolder className="file-icon-1" size={120} style={{ color: "#fd5991" }} />
                                        <BsEye className="file-icon-2" />
                                    </div>
                                    <div className="file-container">
                                        <p className="file-label">Mobile<br />165 files</p>
                                        <FaFolder className="file-icon-1" size={120} style={{ color: "#6edeb9" }} />
                                        <BiLock className="file-icon-2" />
                                    </div>
                                    <div className="file-container">
                                        <p className="file-label">Illustration <br />155 files</p>
                                        <FaFolder className="file-icon-1" size={120} style={{ color: "#ffc878" }} />
                                        <BiImage className="file-icon-2" />
                                    </div>
                                </div>
                            )}
                            {activeFileTab === "private" && (
                                <div className="file-item">
                                    <div className="file-container">
                                        <p className="file-label">UI/UX<br />35 files</p>
                                        <FaFolder className="file-icon-1" size={120} style={{ color: "#a6b5fc" }} />
                                        <BiFolder className="file-icon-2" />
                                    </div>
                                    <div className="file-container">
                                        <p className="file-label">Design<br />231 files</p>
                                        <FaFolder className="file-icon-1" size={120} style={{ color: "#fd5991" }} />
                                        <BsEye className="file-icon-2" />
                                    </div>
                                    <div className="file-container">
                                        <p className="file-label">Mobile<br />195 files</p>
                                        <FaFolder className="file-icon-1" size={120} style={{ color: "#6edeb9" }} />
                                        <BiLock className="file-icon-2" />
                                    </div>
                                    <div className="file-container">
                                        <p className="file-label">Illustration <br />201 files</p>
                                        <FaFolder className="file-icon-1" size={120} style={{ color: "#ffc878" }} />
                                        <BiImage className="file-icon-2" />
                                    </div>
                                </div>
                            )}
                            {activeFileTab === "social" && (
                                <div className="file-item">
                                    <div className="file-container">
                                        <p className="file-label">UI/UX<br />12 files</p>
                                        <FaFolder className="file-icon-1" size={120} style={{ color: "#a6b5fc" }} />
                                        <BiFolder className="file-icon-2" />
                                    </div>
                                    <div className="file-container">
                                        <p className="file-label">Design<br />19 files</p>
                                        <FaFolder className="file-icon-1" size={120} style={{ color: "#fd5991" }} />
                                        <BsEye className="file-icon-2" />
                                    </div>
                                    <div className="file-container">
                                        <p className="file-label">Mobile<br />121 files</p>
                                        <FaFolder className="file-icon-1" size={120} style={{ color: "#6edeb9" }} />
                                        <BiLock className="file-icon-2" />
                                    </div>
                                    <div className="file-container">
                                        <p className="file-label">Illustration <br />276 files</p>
                                        <FaFolder className="file-icon-1" size={120} style={{ color: "#ffc878" }} />
                                        <BiImage className="file-icon-2" />
                                    </div>
                                </div>
                            )}
                        </div>


                    </div>
                    <div className="card media">
                        <h2 className="grid-heading">Media</h2>
                        <div className="media-grid">
                            {mediaData.map((media) => (
                                <div key={media.id} className="media-item">
                                    {media.icon}
                                    <div className="media-info">
                                        <p className="media-count">{media.count}</p>
                                        <p className="media-type">{media.type}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="card projects">
                        <h2 className="grid-heading">Projects</h2>
                        <div className="projects-content">
                            <div className="chart">
                                <PieChart width={150} height={150}>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={40}
                                        outerRadius={60}
                                        dataKey="value"
                                        cornerRadius={2}
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />


                                    <text
                                        x="50%"
                                        y="50%"
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        fontSize="20"
                                        fontWeight="bold"
                                        fill="#333"
                                    >
                                        121
                                    </text>
                                </PieChart>


                            </div>
                            <div className="project-status">
                                {data.map((item) => (
                                    <div key={item.name} className="status">
                                        <span className="status-dot" style={{ backgroundColor: item.color }}></span>
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                            <button className="details-btn">DETAILS</button>
                        </div>
                    </div>

                    <div className="card tasks">
                        <h2 className="grid-heading">Tasks</h2>

                        <div className="tasks-tabs">
                            {[
                                { label: "Today", key: "today" },
                                { label: "This Week", key: "week" },
                                { label: "This Month", key: "month" }
                            ].map((tab) => (
                                <button
                                    key={tab.key}
                                    className={activeTab === tab.key ? "active" : ""}
                                    onClick={() => setActiveTab(tab.key)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="tasks-content">
                            <ul className="tasks-list">
                                {tasksData[activeTab]?.map((task, index) => (
                                    <li key={index} className="task-item">
                                        <span className="task-time">{task.time}</span>
                                        <span className="task-dot" style={{ backgroundColor: task.color }}></span>
                                        <span className="task-name">{task.task}</span>
                                        <span className="task-options">⋮</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="card calendar">



                        <Calendar onChange={setDate} value={date} nextLabel={null}
                            prevLabel={null} />

                    </div>
                    <div className="card views">
                        <div className="views-heading">
                            <h2 className="grid-heading">Views</h2>
                            <span className="grid-options">⋮</span>
                        </div>

                        <div className="views-container">
                            <div className="views-content">
                                <p className="views-number">7,156<IoIosTrendingUp style={{ color: "green", fontSize: "24px", marginTop: "10px" }} /></p>


                                <span className="views-percentage">+7.2%</span>
                            </div>
                            <div className="views-graph">
                                <svg width="200" height="100" viewBox="0 0 100 60">

                                    <path d="M0,40 Q30,20 60,30 T120,20 L120,60 L0,60 Z"
                                        fill="rgba(202,211,253,255)" />

                                    <path d="M0,40 Q30,20 60,30 T120,20"
                                        fill="none" stroke="#97a9fb" strokeWidth="2" />
                                </svg>
                            </div>

                        </div>
                        <button className="views-more-btn">See More</button>

                    </div>
                    <div className="card react-kits">
                        <h2 className="grid-heading">Top 5 react native starter kits</h2>
                        <div className="kits-grid">
                            {starterKits.map((kit, index) => (
                                <div key={index} className="kit-card">
                                    <div className="kit-image-container">
                                        <img src={kit.image} alt={kit.title} className="kit-image" />
                                    </div>
                                    <div className="kit-info">
                                        <h3 className="kit-title">{kit.title}</h3>
                                        <p className="kit-description">{kit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>


                </div>
            </div>

        </>
    );
}



export default Dashboard;