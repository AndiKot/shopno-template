import React from 'react';
import {createUseStyles} from "react-jss";
import Section from "../../Components/Section/Section";
import Address from "./Address/Address";
import ContactForm from "./ContactForm/ContactForm";
import SocialLink from "../../Components/SocialLink/SocialLink";

import background from "../../img/Footer-Bg.jpg";
import {footerSocials} from "./footerSocials";

const useStyles = createUseStyles({
    Footer: {
        marginTop: 116,
    },
    Footer__contacts: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: 122,
    },
    Address__fields: {
        display: 'block',
        marginBottom: 6,
        padding: '0 6px',
        fontFamily: 'Raleway, sans-serif',
        fontSize: '15px',
        fontStyle: 'normal',
        color: '#fff',
        textDecoration: 'none',
    },
    Footer__social: {
        maxWidth: '100vw',
        paddingTop: 93,
        paddingBottom: 89,
        backgroundColor: '#262b2e',
    },
    'Footer__social-title': {
        fontFamily: 'Raleway, sans-serif',
        fontSize: '16px',
        color: '#fff',
        textAlign: 'center',
        textTransform: 'uppercase',
        opacity: '0.8',
    },
    'Footer__social-copyright': {
        marginTop: 40,
        fontFamily: 'Raleway, sans-serif',
        fontSize: '16px',
        color: '#fff',
        textAlign: 'center',
        opacity: '0.4',
    },
    'Footer__social-items': {
        marginTop: 15,
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
    },
    'Footer__social-item': {
        display: 'block',
        width: 46,
        height: 40,
        margin: '0 4px',
        fontSize: '23px',
        lineHeight: '40px',
        backgroundColor: '#424648',
        color: '#bbb8b9',
        transition: '0.3s',
        '&:hover': {
            backgroundColor: '#6eeee4',
            color: '#070e0d',
        }
    },
});

const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10162.247347571707!2d30.50522978688685!" +
    "3d50.44926163745025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce59e3ab65a7%3A0x694b8565cab02eaf" +
    "!2sGolden%20Gate!5e0!3m2!1sen!2sua!4v1642429552938!5m2!1sen!2sua";

export const MapContext = React.createContext(mapSrc);

const Footer = ({...props}) => {
    const classes = useStyles();

    const socialsItems = footerSocials.map((item, index) => {
        return (
            <SocialLink key={item[1]} className={classes['Footer__social-item']}
                        link={item[1]}
                        target="_blank"
                        rel="noreferrer"
                        icon={item[0]} />);
    });

    return (
        <footer>
            <Section className={classes.Footer}
                     style={{background: `url(${background}) no-repeat`}}>
                <div className={classes.Footer__contacts}>
                    <MapContext.Provider value={mapSrc}>
                        <ContactForm />
                        <Address>
                            <p className={classes.Address__fields}>01034, Kyiv </p>
                            <p className={classes.Address__fields}>Volodymyrska St, 40А</p>
                            <a className={classes.Address__fields}
                               href={"tel:+380449998833"}>Phone: +38044 999-88-33</a>
                            <a className={classes.Address__fields}
                               href={"tel:+380449998833"}>Fax: +38044 999-88-33</a>
                            <br/>
                            <a className={classes.Address__fields}
                               href={"https://webbb.dev"}
                               target={"_blank"}
                               rel="noreferrer"
                            >Web: www.webbb.dev</a>
                            <a className={classes.Address__fields}
                               href={"mailto:mail@webbb.dev"}>E-mail: mail@webbb.dev</a>
                        </Address>
                    </MapContext.Provider>
                </div>
                <div className={classes.Footer__social}>
                    <p className={classes['Footer__social-title']}>follow us</p>
                    <div className={classes['Footer__social-items']}>
                        {socialsItems}
                    </div>
                    <p className={classes["Footer__social-copyright"]}>Copyright &copy; Here could be your copyright.
                        All Rights Reserved</p>
                </div>
            </Section>
        </footer>
    );
}

export default Footer;
