import React from "react";
import Menu from "./Menu/Menu";

import "./Navbar.css";

function Navbar(props) {
    const {logo} = props;

    return (
        <div className={"Navbar"}>
            <a href="#">
                <img src={logo} alt="Logo"/>
            </a>
            <Menu />
        </div>
    );
}

export default Navbar;
