import React from 'react';
import Section from "../../Components/Section/Section";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Carousel from "../../Components/Carousel/Carousel";

import "./AboutUs.css";

function  AboutUs(props) {
    const carouselItems = [];
    const carouselConfig = {
        isArrows: false,
        isCrumbs: true,
        items: carouselItems,
    };

    return (
        <Section className="AboutUs">
            <PageTitle title="About us" titleDescription="Lorem ipsum dolor sit amet event landing template" />
            <Carousel config={carouselConfig} className={"AboutUs__carousel"} />
        </Section>
    );
};

export default AboutUs;
