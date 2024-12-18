import React from 'react';


interface ButtonProps {
    className?: string; // Optional className prop
    onClick?: () => void; // Optional onClick handler
    children: React.ReactNode; // Button content
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
    return (
        <button className={`${className} px-4 py-2 text-white bg-color font-semibold rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-300 focus:outline-none`}>{children}</button>
    );
};

export default Button;