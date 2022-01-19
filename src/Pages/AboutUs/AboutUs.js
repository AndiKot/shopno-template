import React from 'react';
import Section from "../../Components/Section/Section";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Carousel from "../../Components/Carousel/Carousel";
import {createUseStyles} from "react-jss";
import CarouselCard from "../../Components/Carousel/CarouselCard/CarouselCard";

import image from '../../img/aboutUs/AboutUs-1.jpg';

const useStyles = createUseStyles({
    AboutUs: {
        height: 984,
        paddingTop: 120,
        paddingBottom: 113,
        backgroundColor: '#f8fafa',
    },
    AboutUs__carousel: {
        marginTop: 148,
    },
    CarouselCard__container: {
        height: 485,
        // overflow: "hidden",
    },
    'CarouselCard__image-container':{
        display: 'flex',
        justifyContent: 'center',
        minWidth: 570,
    },
    CarouselCard__image: {
        display: 'block',
        height: '100%',
        backgroundColor: 'gray',
        objectFit: 'contain',
        objectPosition: 'center',
    },
    CarouselCard__description: {
        width: '50%',
        height: '100%',
        backgroundColor: 'pink',
    },
    description__title: {

    },
    description__text: {

    }
});

const  AboutUs = ({...props}) => {
    const carouselItems = [];
    const carouselConfig = {
        isArrows: false,
        isCrumbs: true,
    };

    const classes = useStyles();

    return (
        <Section className={classes.AboutUs}>
            <PageTitle title="About us" titleDescription="Lorem ipsum dolor sit amet event landing template" />
            <Carousel config={carouselConfig}
                      className={classes['AboutUs__carousel']}
            >
                <CarouselCard key={1}
                              className={classes.CarouselCard__container}
                              image={image}
                              imageContainerStyles={classes['CarouselCard__image-container']}
                              imageStyles={classes.CarouselCard__image}
                              descriptionStyles={classes.CarouselCard__description}
                >1</CarouselCard>
                <CarouselCard key={2}
                              className={classes.CarouselCard__container}
                              image={image}
                              imageContainerStyles={classes['CarouselCard__image-container']}
                              imageStyles={classes.CarouselCard__image}
                              descriptionStyles={classes.CarouselCard__description}
                >2</CarouselCard>
                <CarouselCard key={3}
                              className={classes.CarouselCard__container}
                              image={image}
                              imageContainerStyles={classes['CarouselCard__image-container']}
                              imageStyles={classes.CarouselCard__image}
                              descriptionStyles={classes.CarouselCard__description}
                >3</CarouselCard>
            </Carousel>
        </Section>
    );
};

export default AboutUs;
