import React from 'react';
import Navbar from "../Navbar";
import Page from "../Page";
import logo from '../../img/Main-Logo.png'

const MainContent = ({ children }) => {
    return (
        <div className={''}>
            <Page>
                <Navbar mainLogo={logo}/>
                {children}
            </Page>
        </div>
    );
};

export default MainContent;
