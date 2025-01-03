'use client';
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode;

}

const Button: React.FC<ButtonProps> = ({ children, id, className, ...props }) => {
    return (
        <button
            id={id}
            className={`${className} px-4 py-2 text-white bg-color font-semibold rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-300 focus:outline-none`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;