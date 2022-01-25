import React from 'react';
import { useStyles } from "./styles";

const PageTitle = ({ title, titleDescription }) => {
    const {
        pageTitle,
        pageTitleHeader,
        pageTitleSubheader,
    } = useStyles();

    return (
        <div className={pageTitle}>
            <h2 className={pageTitleHeader}>
                {title}
            </h2>
            <p className={pageTitleSubheader}>
                {titleDescription}
            </p>
        </div>
    );
}

export default PageTitle;
