import React from 'react';
import "../assets/btn-component.css"; // Ensure the path is correct

const Button = ({ children, onClick, type = "button", className = "", variant = "primary", disabled }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`btn-component ${variant} ${className} ${disabled ? "disabled" : ""}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
