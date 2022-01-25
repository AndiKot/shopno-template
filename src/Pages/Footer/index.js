import React from 'react';
import Page from "../../Components/Page";
import Address from "./Address";
import ContactForm from "./ContactForm";
import SocialLink from "../../Components/SocialLink";

import { useStyles } from "./styles";
import {footerSocials} from "./footerSocials";

const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10162.247347571707!2d30.50522978688685!" +
    "3d50.44926163745025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce59e3ab65a7%3A0x694b8565cab02eaf" +
    "!2sGolden%20Gate!5e0!3m2!1sen!2sua!4v1642429552938!5m2!1sen!2sua";

export const MapContext = React.createContext(mapSrc);

const Footer = () => {
    const {
        footer,
        footerContacts,
        addressFields,
        footerSocialTitle,
        footerSocial,
        footerSocialItems,
        footerSocialItem,
        footerSocialCopyright,
    } = useStyles();

    const socialsItems = footerSocials.map((item, index) => {
        return (
            <SocialLink
                key={item[1]}
                className={footerSocialItem}
                link={item[1]}
                target="_blank"
                rel="noreferrer"
                icon={item[0]}
            />);
    });

    return (
        <footer id="contacts">
            <Page className={footer}>
                <div className={footerContacts}>
                    <MapContext.Provider value={mapSrc}>
                        <ContactForm />
                        <Address>
                            <p className={addressFields}>01034, Kyiv </p>
                            <p className={addressFields}>Volodymyrska St, 40А</p>
                            <a className={addressFields}
                               href={"tel:+380449998833"}>Phone: +38044 999-88-33</a>
                            <a className={addressFields}
                               href={"tel:+380449998833"}>Fax: +38044 999-88-33</a>
                            <br/>
                            <a className={addressFields}
                               href={"https://webbb.dev"}
                               target={"_blank"}
                               rel="noreferrer"
                            >Web: www.webbb.dev</a>
                            <a className={addressFields}
                               href={"mailto:mail@webbb.dev"}>E-mail: mail@webbb.dev</a>
                        </Address>
                    </MapContext.Provider>
                </div>
                <div className={footerSocial}>
                    <p className={footerSocialTitle}>follow us</p>
                    <div className={footerSocialItems}>
                        {socialsItems}
                    </div>
                    <p className={footerSocialCopyright}>Copyright &copy; Here could be your copyright.
                        All Rights Reserved</p>
                </div>
            </Page>
        </footer>
    );
}

export default Footer;
