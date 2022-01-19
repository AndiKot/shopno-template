import React, {useState, useEffect, useRef} from 'react';
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    MemberInfo: {
        display: 'block',
        width: 370,
        height: 440,
        marginTop: 10,
        position: 'relative',
        overflow: 'auto',
    },
    MemberInfo__description: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        opacity: 0,
        position: 'absolute',
        width: 335,
        height: 241,
        margin: 15,
        padding: 39,
        bottom: 0,
        zIndex: 10,
        backgroundColor: '#71f5ea',
        boxShadow: '2px 6px 8px rgba(20, 20, 21, 0.18)',
        transition: 'opacity 0.3s ease-in',
        '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            width: 0,
            height: 0,
            top: -42,
            left: 21,
            borderTop: '21px solid transparent',
            borderRight: '11px solid transparent',
            borderBottom: '21px solid #71f5ea',
            borderLeft: '11px solid transparent',
            zIndex: 10,
        },
    },
    'MemberInfo__description--visible': {
        opacity: 1,
    },
    MemberInfo__image: {
        float: 'left',
    },
});

const MemberInfo = ({backgroundImage, children, ...props}) => {
    const [isHovered, setIsHovered] = useState(false);
    const parent = useRef(null);
    const classes = useStyles();

    useEffect(() => {
        isHovered ? parent.current.lastChild.classList.add(classes['MemberInfo__description--visible'])
            : parent.current.lastChild.classList.remove(classes['MemberInfo__description--visible'])
    }, [isHovered, classes]);

    const mouseEnterHandler = () => {
        setIsHovered(true);
    }

    const mouseLeaveHandler = () => {
        setIsHovered(false);
    }

    return (
        <div ref={parent}
            className={classes.MemberInfo}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            <img className={classes.MemberInfo__image}
                src={backgroundImage} alt={"Background"}/>
            <div className={classes.MemberInfo__description}>
                {children}
            </div>
        </div>
    );
};

export default MemberInfo;
