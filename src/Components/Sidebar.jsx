import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaHome, FaUser, FaCog, FaUserCircle } from "react-icons/fa";
import { IoCart, IoDocumentText } from "react-icons/io5";
import { TbGridDots, TbTable, TbMessages } from "react-icons/tb";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { SiGoogleforms } from "react-icons/si";
import { BiSolidBarChartSquare } from "react-icons/bi";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { IoMapSharp } from "react-icons/io5";
import { FiStar } from "react-icons/fi";
import { MdFolderOpen, MdLibraryBooks } from "react-icons/md";
import "../assets/Sidebar.css";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Menu Button */}
            <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>

            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <ul>
                    <li>
                        <Link to="/profile">
                            <FaUserCircle /> Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard">
                            <FaHome /> Dashboard
                        </Link>
                    </li>
                    <li>
                        <button className="node-btn">Node JS</button>
                        <Link to="/e_commerce">
                            <IoCart /> E-commerce

                        </Link>
                    </li>
                    <li>
                        <button className="new-btn">New</button>
                        <Link to="/user">
                            <FaUser /> User

                        </Link>
                    </li>
                    <li>
                        <Link to="/documentation">
                            <IoDocumentText /> Documentation
                        </Link>
                    </li>
                </ul>

                <hr />

                <ul>
                    <h2>TEMPLATE</h2>
                    <li>
                        <Link to="/core">
                            <TbGridDots /> Core
                        </Link>
                    </li>
                    <li>
                        <Link to="/table">
                            <TbTable /> Table
                        </Link>
                    </li>
                    <li>
                        <Link to="/ui_elements">
                            <HiOutlineSquare2Stack /> UI Elements
                        </Link>
                    </li>
                    <li>
                        <Link to="/forms">
                            <SiGoogleforms /> Forms
                        </Link>
                    </li>
                    <li>
                        <Link to="/chart">
                            <BiSolidBarChartSquare /> Charts
                        </Link>
                    </li>
                    <li>
                        <Link to="/grid">
                            <BsFillGrid1X2Fill /> Grid
                        </Link>
                    </li>
                    <li>
                        <Link to="/map">
                            <IoMapSharp /> Maps
                        </Link>
                    </li>
                    <li>
                        <Link to="/extra">
                            <FiStar /> Extra
                        </Link>
                    </li>
                    <li>
                        <Link to="/menu_level">
                            <MdFolderOpen /> Menu Levels
                        </Link>
                    </li>
                </ul>

                <hr />

                <ul>
                    <h2>HELP</h2>
                    <li>
                        <Link to="/library">
                            <MdLibraryBooks /> Library
                        </Link>
                    </li>
                    <li>
                        <Link to="/support">
                            <TbMessages /> Support
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
