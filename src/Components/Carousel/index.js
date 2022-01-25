import React, { useState, useEffect, useRef } from "react";
import Progress from "./Progress";
import Arrows from "./Arrows";
import { useStyles } from "./styles";

const Carousel = ({ children, config, className }) => {
    const [currentFrame, setCurrentFrame] = useState(1);
    const [framesQuantity, setFramesQuantity] = useState(3);
    const [translate, setTranslate] = useState({transform: 'translateX(0)'});
    const {
        carousel,
        carouselCardsContainer,
        carouselTrack,
        carouselNavigation,
        carouselNavigationArrowsContainer,
        progressItem,
        progressItemActive,
    } = useStyles();

    const track = useRef(null);

    useEffect(() => {
        const newPosition = (currentFrame - 1) * track.current.offsetWidth;

        setTranslate({
            transform: `translateX(-${newPosition}px)`
        });

        let timeout = setTimeout(() => prevHandler(), 5000);

        return () => clearTimeout(timeout);

    }, [currentFrame, framesQuantity]);

    const prevHandler = () => {
        if (currentFrame === framesQuantity) {
            setCurrentFrame(1);
        } else {
            setCurrentFrame(currentFrame + 1);
        }
    };

    const nextHandler = () => {
        if (currentFrame === 1) {
            setCurrentFrame(framesQuantity);
        } else {
            setCurrentFrame(currentFrame - 1);
        }
    }

    const setSelectedFrame = (event) => {
        const frameNumber = +event.target.dataset.frame;

        if (frameNumber > framesQuantity) {
            setCurrentFrame(framesQuantity);
        } else if (frameNumber < 1) {
            setCurrentFrame(1);
        } else {
            setCurrentFrame(frameNumber);
        }
    }

    const createProgressPoints = (cards, activeFrame, className, activeClass) => {
        return Array.from(cards).map((item, index) => <div
                key={index + 1}
                data-frame={index + 1}
                className={`${className} ${activeFrame === index + 1 ? activeClass : ''}`}
            />
        );
    };

    return (
        <div className={`${carousel} ${className}`}>
            <div className={carouselCardsContainer}>
                <div ref={track}
                     style={translate}
                     className={carouselTrack}>
                    {children}
                </div>
            </div>
            <div className={carouselNavigation}>
                {
                    config.isCrumbs ? <Progress
                            className={''}
                            onClick={setSelectedFrame}
                        >
                            { createProgressPoints(children, currentFrame, progressItem, progressItemActive) }
                        </Progress>
                        : null
                }
                {
                    config.isArrows ? <Arrows
                            className={''}
                            prevHandler={prevHandler}
                            nextHandler={nextHandler}
                        />
                        : null
                }
            </div>
        </div>
    );
}

export default Carousel;
