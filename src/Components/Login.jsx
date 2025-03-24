import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "./Button";
import "../assets/login.css";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [showPopup, setShowPopup] = useState(false); // State for popup

    const navigate = useNavigate();

    const validateField = (name, value) => {
        if (name === "username" && !value.trim()) {
            return "Username is required";
        }
        if (name === "password" && !value.trim()) {
            return "Password is required";
        }
        return "";
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "username") setUsername(value);
        if (name === "password") setPassword(value);

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: validateField(name, value),
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault();

        let newErrors = {
            username: validateField("username", username),
            password: validateField("password", password),
        };

        if (Object.values(newErrors).some((error) => error)) {
            setErrors(newErrors);
            return;
        }

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) {
            setErrors({ general: "No registered user found. Please sign up first." });
            return;
        }

        if (storedUser.username === username && storedUser.password === password) {
            setShowPopup(true);
        } else {
            setErrors({ general: "Invalid username or password" });
        }
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        navigate("/profile");
    };

    return (
        <div className='main-card-login'>
            <div className='left-container-login'>
                <h1 className='heading-login'>Login To Your Account</h1>
                <p className='left-container-paragraph-login'>
                    Welcome back! Log in to access your account and continue where you left off.
                    Stay connected and enjoy seamless access to all our features.
                </p>
            </div>

            <div className='right-container-login'>
                <h1 className='heading-login'>Welcome Back</h1>
                <p className='small-heading-login'>Enter your credentials to login</p>

                <form className="form-login" onSubmit={handleLogin}>
                    <div className="input-container-login">
                        <FaUser className="icon" />
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={handleChange}
                            className={errors.username ? "error-input" : ""}
                        />
                        {errors.username && <p className="error-message-login">{errors.username}</p>}
                    </div>

                    <div className="input-container-login">
                        <MdOutlinePassword className="icon" />
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={handleChange}
                            className={errors.password ? "error-input" : ""}
                        />
                        <span className="eye-icon-login" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                        {errors.password && <p className="error-message-login">{errors.password}</p>}
                    </div>

                    {errors.general && <p className="error-message-login">{errors.general}</p>}
                    <Button type="submit" variant="primary" className="login-btn">Login</Button>
                </form>

                <Link to="/forgot-password" className="forgot-password-login">Forgot Password?</Link>
                <p className="signup-text-login">
                    Don't have an account?
                    <span onClick={() => navigate("/")} className="signup-link-login"> Sign Up</span>
                </p>
            </div>

            {/* Pop-up Modal */}
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Login Successful!</h2>
                        <p>Welcome back! You have successfully logged in.</p>
                        <button onClick={handleClosePopup}>OK</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;
