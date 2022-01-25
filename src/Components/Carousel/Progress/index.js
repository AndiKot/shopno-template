import React from 'react';
import { useStyles } from "./styles";

const Progress = ({ className, onClick, children }) => {
    const {
        progressContainer,
    } = useStyles();

    return (
        <div
            className={`${progressContainer} ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Progress;
