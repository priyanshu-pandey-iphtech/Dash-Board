import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import "../assets/signup.css";
import { FaUser, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";


export const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const validateField = (name, value) => {
        let error = "";

        if (name === "username") {
            if (!value.trim()) error = "Username is required";
            else if (!/^[a-zA-Z\s]{3,}$/.test(value)) error = "Must be at least 3 letters ";
        }

        if (name === "email") {
            if (!value.trim()) error = "Email is required";
            else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) error = "Enter a valid email";
        }

        if (name === "password") {
            if (!value.trim()) {
                error = "Password is required";
            } else if (value.length < 6) {
                error = "Must be at least 6 characters";
            } else if (!/[A-Z]/.test(value)) {
                error = "Must contain at least one uppercase letter";
            } else if (!/[a-z]/.test(value)) {
                error = "Must contain at least one lowercase letter";
            } else if (!/[0-9]/.test(value)) {
                error = "Must contain at least one digit";
            } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
                error = "Must contain at least one special character";
            }
        }

        if (name === "confirmPassword") {
            if (!value.trim()) error = "Please confirm your password";
            else if (value !== password) error = "Passwords do not match";
        }

        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "username") setUsername(value);
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
        if (name === "confirmPassword") setConfirmPassword(value);

        validateField(name, value);
    };

    const handleSignup = (e) => {
        e.preventDefault();
        let newErrors = {};

        ["username", "email", "password", "confirmPassword"].forEach((key) => {
            const error = validateField(key, eval(key));
            if (error) newErrors[key] = error;
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Save user data in localStorage
            localStorage.setItem(
                "user",
                JSON.stringify({ username, email, password })
            );

            navigate("/login");
        }
    };

    return (
        <div className='main-card'>
            <div className='left-container'>
                <h1 className='heading'>Sign up</h1>
                <p className='left-container-paragraph'>Create your account to get started! Sign up now to access exclusive features.</p>
            </div>

            <div className='right-container'>
                <h1 className='heading'>Sign up</h1>
                <p className='small-heading'>Create your account</p>

                <form onSubmit={handleSignup}>
                    {/* Username Input */}
                    <div className="input-container">
                        <FaUser className="icon" />
                        <input type="text" name="username" placeholder="Username" value={username} onChange={handleChange} />
                        {errors.username && <p className="error-message">{errors.username}</p>}
                    </div>


                    <div className="input-container">
                        <FaEnvelope className="icon" />
                        <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange} />
                        {errors.email && <p className="error-message">{errors.email}</p>}
                    </div>


                    <div className="input-container">
                        <MdOutlinePassword className="icon" />
                        <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={password} onChange={handleChange} />
                        <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                        {errors.password && <p className="error-message">{errors.password}</p>}
                    </div>


                    <div className="input-container">
                        <MdOutlinePassword className="icon" />
                        <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={handleChange} />
                        <span className="eye-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
                    </div>
                    <Button type="submit" variant="primary" className='signup-btn'>Sign up</Button>


                </form>

                <p className='or'>Or</p>
                <Button variant="secondary" className='google-btn'>Sign In with Google</Button>
                <p className='last-line'>Already have an account? <span onClick={() => navigate("/login")} style={{ color: "#9c28b1", cursor: "pointer", fontWeight: "bold" }}>Login</span></p>
            </div>
        </div>
    );
};
