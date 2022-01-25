import React from 'react';
import { useStyles } from "./styles";

const Page = ({ children, className }) => {
    const {
        page,
        container
    } = useStyles();

    return (
        <div
            className={`${page} ${className || ''}`}
        >
            <div className={container}>
                {children}
            </div>
        </div>
    );
}

export default Page;
