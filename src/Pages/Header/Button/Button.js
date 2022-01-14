import React from "react";

import "./Button.css";

function Button(props) {
    const {title} = props;

    return (
        <button className={"Button"}>{title}</button>
    );
}

export default Button;
