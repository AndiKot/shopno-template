import React from 'react';

import './PageTitle.css';

function PageTitle(props) {
    const {title, titleDescription} = props;
    return (
        <div className={"PageTitle"}>
            <h2 className={"PageTitle__header"}>{title}</h2>
            <p className={"PageTitle__description"}>{titleDescription}</p>
        </div>
    );
}

export default PageTitle;
