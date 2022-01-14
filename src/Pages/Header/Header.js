import React from "react";
import Section from "../../Components/Section/Section";
import Navbar from "./Navbar/Navbar";
import Button from "./Button/Button"

import "./Header.css";

function Header(props) {
    const {background, logo} = props;

    return (
        <Section className={"Header"} style={{backgroundImage: `url(${background})`}}>
            <Navbar logo={logo}/>
            <div className={"Header__content"}>
                <h1 className={"Header__title"}>Say hello to <em className={"Header__em"}>shopno!</em><br /><em className={"Header__em"}>agency</em> corporate shopno theme</h1>
                <Button title={"contact us"} />
            </div>
        </Section>
    );
}

export default Header;
