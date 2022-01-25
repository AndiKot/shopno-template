import React from 'react';
import Section from "../../Components/Page";
import PageTitle from "../../Components/PageTitle";
import Gallery from "../../Components/Gallery";
import ServiceInfo from "./ServiceInfo";
import { useStyles } from "./styles";
import { serviceImages } from "./serviceImages";

const MostServices = () => {
    const servicesItems = serviceImages.map((item) => <ServiceInfo
            key={item}
            backgroundImage={item}
        />);

    const {
        mostServices,
        mostServicesGallery
    } = useStyles();

    return (
        <Section
            id="services"
            className={mostServices}
        >
            <PageTitle
                title={"Our services"}
                titleDescription={"Lorem ipsum dolor sit amet event landing template"}
            />
            <Gallery className={mostServicesGallery}>
                {servicesItems}
            </Gallery>
        </Section>
    );
};

export default MostServices;
