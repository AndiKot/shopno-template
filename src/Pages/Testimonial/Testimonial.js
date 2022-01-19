import React from 'react';
import {createUseStyles} from "react-jss";
import Section from "../../Components/Section/Section";
import Carousel from "../../Components/Carousel/Carousel";
import PageTitle from "../../Components/PageTitle/PageTitle";
import CarouselCard from "../../Components/Carousel/CarouselCard/CarouselCard";
import image from "../../img/aboutUs/AboutUs-1.jpg";

const useStyles = createUseStyles({
    Testimonial: {
        paddingTop: 119,
        paddingBottom: 139,
    },
    Testimonial__carousel: {
        marginTop: 148,
    },
    CarouselCard__container: {
        height: 400,
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

const Testimonial = ({...props}) => {
    const carouselItems = [];
    const carouselConfig = {
        isArrows: true,
        isCrumbs: true,
        items: carouselItems,
    };

    const classes = useStyles();

    return (
        <Section className={classes.Testimonial}>
            <PageTitle title="What they says" titleDescription="Lorem ipsum dolor sit amet event landing template"/>
            <Carousel config={carouselConfig} className={classes.Testimonial__carousel}>
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

export default Testimonial;
