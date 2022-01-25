import React from 'react';
import { useStyles } from "./styles";
import Section from "../../Components/Page";
import Carousel from "../../Components/Carousel";
import PageTitle from "../../Components/PageTitle";
import CarouselCard from "../../Components/Carousel/CarouselCard";
import image from "../../img/aboutUs/AboutUs-1.jpg";

const Testimonial = () => {
    const carouselItems = [];
    const carouselConfig = {
        isArrows: true,
        isCrumbs: true,
        items: carouselItems,
    };
    const {
        testimonials,
        testimonialsCarousel,
        carouselCardContainer,
        carouselCardImageContainer,
        carouselCardImage,
        carouselCardDescription,
        descriptionTitle,
        descriptionText,
    } = useStyles();

    return (
        <Section id="testimonials"
                 className={testimonials}>
            <PageTitle
                title="What they says"
                titleDescription="Lorem ipsum dolor sit amet event landing template"
            />
            <Carousel
                config={carouselConfig}
                className={testimonialsCarousel}
            >
                <CarouselCard
                    key={1}
                    className={carouselCardContainer}
                    image={image}
                    imageContainerStyles={carouselCardImageContainer}
                    imageStyles={carouselCardImage}
                    descriptionStyles={carouselCardDescription}
                >
                    1
                </CarouselCard>
                <CarouselCard
                    key={2}
                    className={carouselCardContainer}
                    image={image}
                    imageContainerStyles={carouselCardImageContainer}
                    imageStyles={carouselCardImage}
                    descriptionStyles={carouselCardDescription}
                >
                    2
                </CarouselCard>
                <CarouselCard
                    key={3}
                    className={carouselCardContainer}
                    image={image}
                    imageContainerStyles={carouselCardImageContainer}
                    imageStyles={carouselCardImage}
                    descriptionStyles={carouselCardDescription}
                >
                    3
                </CarouselCard>
            </Carousel>
        </Section>
    );
};

export default Testimonial;
