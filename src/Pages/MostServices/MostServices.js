import React from 'react';
import {createUseStyles} from "react-jss";
import Section from "../../Components/Section/Section";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Gallery from "../../Components/Gallery/Gallery";
import ServiceInfo from "./ServiceInfo/ServiceInfo";
import {serviceImages} from "./serviceImages";

const useStyles = createUseStyles({
    MostServices: {
        paddingTop: 125,
        paddingBottom: 122,
    },
    MostServices__gallery: {
        marginTop: 124,
        padding: '0 15px',
    },
});

const MostServices = ({...props}) => {
    const servicesItems = serviceImages
        .map((item) => <ServiceInfo key={item} backgroundImage={item}></ServiceInfo>);

    const classes = useStyles();

    return (
        <Section className={classes.MostServices}>
            <PageTitle title={"Our services"} titleDescription={"Lorem ipsum dolor sit amet event landing template"}/>
            <Gallery className={classes.MostServices__gallery}>
                {servicesItems}
            </Gallery>
        </Section>
    );
};

export default MostServices;
