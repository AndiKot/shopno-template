import React from "react";
import {createUseStyles} from "react-jss";
import Section from "../../Components/Section/Section";
import Navbar from "./Navbar/Navbar";
import Button from "./Button/Button"

const useStyles = createUseStyles({
    Header: {
        height: 806,
        paddingTop: 64,
        backgroundColor: '#eff0f2',
        },
    Header__title: {
        marginTop: 192,
        fontSize: 45,
        fontWeight: 'bold',
        lineHeight: '59px',
        color: '#505050',
        textAlign: 'center',
        letterSpacing: 2,
        textTransform: 'uppercase',
        textShadow: '4px 8px 8px rgba(0, 0, 0, 0.24)',
    },
    Header__em: {
        display: 'inline-block',
        padding: '0 11px',
        fontStyle: 'inherit',
        backgroundColor: '#b2f2ee',
    },
});

const Header = ({background, logo, ...props}) => {
    const classes = useStyles();

    return (
        <Section className={classes.Header} style={{backgroundImage: `url(${background})`}}>
            <Navbar logo={logo}/>
            <div className={"Header__content"}>
                <h1 className={classes.Header__title}>Say hello to <em className={classes.Header__em}>shopno!</em><br /><em className={classes.Header__em}>agency</em> corporate shopno theme</h1>
                <Button>contact us</Button>
            </div>
        </Section>
    );
}

export default Header;
