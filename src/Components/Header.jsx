import React from 'react';
import { IoArrowBack } from "react-icons/io5";
import "../assets/header.css";
import { useNavigate } from "react-router-dom";
import dp from '../assets/dp.jpg';

const Header = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate("/login");
    };


    const user = JSON.parse(localStorage.getItem("loggedInUser")) || {};
    const username = user.username || "Admin";

    return (
        <div className='header-container'>
            <div className="first_part">
                <div className='back-btn' onClick={handleBackClick}>
                    <IoArrowBack />
                </div>

                <h3 className='header-title'>React Material Admin Full</h3>
            </div>

            <div className='profile-section'>
                <img src={dp} alt="Profile" className="small_img" />
                <h3 className='admin-text'>Hi, <b>{username}</b></h3>
            </div>
        </div>
    );
}

export default Header;
