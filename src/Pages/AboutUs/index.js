import React from 'react';
import Page from "../../Components/Page";
import PageTitle from "../../Components/PageTitle";
import Carousel from "../../Components/Carousel";
import CarouselCard from "../../Components/Carousel/CarouselCard";
import { useStyles } from "./styles";

import image from '../../img/aboutUs/AboutUs-1.jpg';

const  AboutUs = () => {
    const {
        aboutUs,
        aboutUsCarousel,
        carouselCardContainer,
        carouselCardImageContainer,
        carouselCardImage,
        carouselCardDescriptionContainer,
        descriptionTitle,
        descriptionText,
    } = useStyles();

    const carouselConfig = {
        isArrows: false,
        isCrumbs: true,
    };

    return (
        <Page
            id="about"
            className={aboutUs}
        >
            <PageTitle
                title="About us"
                titleDescription="Lorem ipsum dolor sit amet event landing template"
            />
            <Carousel
                config={carouselConfig}
                className={aboutUsCarousel}
            >
                <CarouselCard
                    key={1}
                    className={carouselCardContainer}
                    image={image}
                    imageContainerStyles={carouselCardImageContainer}
                    imageStyles={carouselCardImage}
                    descriptionStyles={carouselCardDescriptionContainer}
                >1</CarouselCard>
                <CarouselCard
                    key={2}
                    className={carouselCardContainer}
                    image={image}
                    imageContainerStyles={carouselCardImageContainer}
                    imageStyles={carouselCardImage}
                    descriptionStyles={carouselCardDescriptionContainer}
                >2</CarouselCard>
                <CarouselCard
                    key={3}
                    className={carouselCardContainer}
                    image={image}
                    imageContainerStyles={carouselCardImageContainer}
                    imageStyles={carouselCardImage}
                    descriptionStyles={carouselCardDescriptionContainer}
                >3</CarouselCard>
            </Carousel>
        </Page>
    );
};

export default AboutUs;
