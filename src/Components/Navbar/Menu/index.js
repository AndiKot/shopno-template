import React from "react";
import { NavLink } from "react-router-dom";
import { useStyles } from "./styles";

const Menu = () => {
    const {
        menu,
        menuItems,
        menuItem,
        menuItemActive,
    } = useStyles();

    return (
        <nav className={menu}>
            <ul className={menuItems}>
                <li className={menuItem}>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className={menuItem}>
                    <NavLink to="about">About Us</NavLink>
                </li>
                <li className={menuItem}>
                    <NavLink to="works">Featured Works</NavLink>
                </li>
                <li className={menuItem}>
                    <NavLink to="services">Our Services</NavLink>
                </li>
                <li className={menuItem}>
                    <NavLink to="team">Our Team</NavLink>
                </li>
                <li className={menuItem}>
                    <NavLink to="testimonials">Testimonials</NavLink>
                </li>
                <li className={menuItem}>
                    <NavLink to="clients">Our Clients</NavLink>
                </li>
                <li className={menuItem}>
                    <NavLink to="contacts">Contacts</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
