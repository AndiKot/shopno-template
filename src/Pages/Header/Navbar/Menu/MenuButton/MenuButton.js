import React from "react";

import "./MenuButton.css";

function MenuButton(props) {
    return (
        <div className={"Menu__button"} onClick={props.clickHandler}>
            <div className={"Menu__button-bar"}></div>
            <div className={"Menu__button-bar"}></div>
            <div className={"Menu__button-bar"}></div>
        </div>
    );
}

export default MenuButton;
