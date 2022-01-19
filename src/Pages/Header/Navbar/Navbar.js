import React from "react";
import {createUseStyles} from "react-jss";
import Menu from "./Menu/Menu";

const useStyles = createUseStyles({
    Navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    }
});

const Navbar = ({logo, ...props}) => {
    const classes = useStyles();

    return (
        <div className={classes.Navbar}>
            <a href="#">
                <img src={logo} alt="Logo"/>
            </a>
            <Menu />
        </div>
    );
}

export default Navbar;
