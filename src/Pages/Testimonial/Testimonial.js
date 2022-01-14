import React from 'react';
import Section from "../../Components/Section/Section";
import Carousel from "../../Components/Carousel/Carousel";
import './Testimonial.css';
import PageTitle from "../../Components/PageTitle/PageTitle";

function Testimonial(props) {
    const carouselItems = [];
    const carouselConfig = {
        isArrows: false,
        isCrumbs: true,
        items: carouselItems,
    };
    return (
        <Section className={"Testimonial"}>
            <PageTitle title="What they says" titleDescription="Lorem ipsum dolor sit amet event landing template"/>
            <Carousel config={carouselConfig} className={"Testimonial__carousel"}/>
        </Section>
    );
};

export default Testimonial;
