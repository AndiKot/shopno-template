import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import {useStyles} from "./styles";

const Navbar = ({mainLogo}) => {
    const {
        navbar,
        logo,
    } = useStyles();

    return (
        <div className={navbar}>
            <NavLink
                className={logo}
                to="/"
            >
                <img src={mainLogo} alt="Logo" />
            </NavLink>
            <Menu />
        </div>
    );
}

export default Navbar;
