import React, {useState, useEffect, useRef} from "react";
import {createUseStyles} from "react-jss";
import Crumbs from "./Crumbs/Crumbs";
import Arrows from "./Arrows/Arrows";

const useStyles = createUseStyles({
    Carousel: {
        width: '100%',
    },
    'Carousel__cards-container': {
        // height: 485,
        overflow: 'hidden',
        backgroundColor: 'red',
    },
    Carousel__track: {
        display: 'flex',
        backgroundColor: "yellow",
        transition: '0.9s ease-in-out',
    },
    CarouselNavigation: {
        width: '100%',
        // height: 10,
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'lightgray',
    },
    'CarouselNavigation__arrows-container': {
        width: '50%',
        height: 11,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'gray',
    },
});

const Carousel = ({children, config, ...props}) => {
    const [currentFrame, setCurrentFrame] = useState(1);
    const [framesQuantity, setFramesQuantity] = useState(3);
    const [translate, setTranslate] = useState({transform: 'translateX(0)'});
    const classes = useStyles();

    const carouselTrack = useRef(null);

    useEffect(() => {
        const newPosition = (currentFrame - 1) * carouselTrack.current.offsetWidth;

        setTranslate({
            transform: `translateX(-${newPosition}px)`
        });

        let timeout = setTimeout(() => nextHandler(), 5000);

        return () => clearTimeout(timeout);

    }, [currentFrame, framesQuantity]);

    const prevHandler = () => {
        console.log('Previous button clicked');
        if (currentFrame === 1) {
            setCurrentFrame(framesQuantity);
        } else {
            setCurrentFrame(currentFrame - 1);
        }
    };

    const nextHandler = () => {
        if (currentFrame === framesQuantity) {
            setCurrentFrame(1);
        } else {
            setCurrentFrame(currentFrame + 1);
        }
    }

    const setSelectedFrame = (event) => {
        const frameNumber = +event.target.dataset.id;

        console.log(`Crumb ${frameNumber} selected`);

        if (frameNumber > framesQuantity) {
            setCurrentFrame(framesQuantity);
        } else if (frameNumber < 1) {
            setCurrentFrame(1);
        } else {
            setCurrentFrame(frameNumber);
        }
    }

    return (
        <div className={`${classes.Carousel} ${props.className}`}>
            <div className={classes['Carousel__cards-container']}>
                <div ref={carouselTrack}
                     style={translate}
                     className={classes.Carousel__track}>
                    {children}
                </div>
            </div>
            <div className={classes.CarouselNavigation}>
                {
                    config.isCrumbs ? <Crumbs className={''}
                                              dataIds={[1,2,3]}
                                              onClick={setSelectedFrame} />
                        : null
                }
                {
                    config.isArrows ? <Arrows className={''}
                                              prevHandler={prevHandler}
                                              nextHandler={nextHandler} />
                        : null
                }
            </div>
        </div>
    );
}

export default Carousel;
