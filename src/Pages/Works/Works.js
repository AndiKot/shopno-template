import React from 'react';
import Section from "../../Components/Section/Section";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Gallery from "../../Components/Gallery/Gallery";
import './Works.css';
import {importAll} from "../../utils/importImages";

function Works(props) {
    const worksItems = importAll(require.context('../../img/works', false, /\.(png|jpe?g|svg)$/))
        .map(item => <img key={item} src={item} alt={"Works item"} className={"Works__gallery--item"}/>);

    return (
        <Section className={"Works"}>
            <PageTitle title={"Featured works"} titleDescription={"Lorem ipsum dolor sit amet event landing template"} />
            <Gallery className={"Works__gallery"}>
                {worksItems}
            </Gallery>
        </Section>
    );
};

export default Works;
