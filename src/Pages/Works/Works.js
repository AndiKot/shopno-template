import React from 'react';
import {createUseStyles} from "react-jss";
import Section from "../../Components/Section/Section";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Gallery from "../../Components/Gallery/Gallery";
import {featureImages} from "./images";
// import {importAll} from "../../utils/importImages";

const useStyles = createUseStyles({
    Works: {
        height: 1165,
        paddingTop: 115,
        paddingBottom: 123,
        backgroundColor: '#fff',
    },
    Works__gallery: {
        marginTop: 122,
        padding: '0 15px',
    },
    'Works__gallery--item': {
        width: 370,
        height: 359,
        marginBottom: 15,
    },
});

function Works({...props}) {
    const classes = useStyles();

    const worksItems = featureImages
        .map(item => <img key={item} src={item} alt={"Works item"} className={classes["Works__gallery--item"]}/>);

    return (
        <Section className={classes.Works}>
            <PageTitle title={"Featured works"} titleDescription={"Lorem ipsum dolor sit amet event landing template"} />
            <Gallery className={classes.Works__gallery}>
                {worksItems}
            </Gallery>
        </Section>
    );
};

export default Works;
