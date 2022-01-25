import React from 'react';
import Section from "../../Components/Page";
import PageTitle from "../../Components/PageTitle";
import Gallery from "../../Components/Gallery";
import { useStyles } from "./styles";
import { featureImages } from "./images";

function Works() {
    const {
        works,
        worksGallery,
        worksGalleryItem,
    } = useStyles();

    const worksItems = featureImages.map(item => <img
            key={item}
            src={item}
            alt={"Works item"}
            className={worksGalleryItem}
        />);

    return (
        <Section
            id="works"
            className={works}
        >
            <PageTitle
                title={"Featured works"}
                titleDescription={"Lorem ipsum dolor sit amet event landing template"}
            />
            <Gallery className={worksGallery}>
                {worksItems}
            </Gallery>
        </Section>
    );
};

export default Works;
