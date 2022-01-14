import React from 'react';
import Section from "../../Components/Section/Section";
import PageTitle from "../../Components/PageTitle/PageTitle";
import {importAll} from "../../utils/importImages";
import Gallery from "../../Components/Gallery/Gallery";
import ServiceInfo from "./ServiceInfo/ServiceInfo";
import './MostServices.css';

const serviceDescriptions =[

];


function MostServices(props) {
    const servicesItems = importAll(require.context('../../img/mostService', false, /\.(png|jpe?g|svg)$/))
        .map((item, index) => <ServiceInfo key={item} backgroundImage={item}></ServiceInfo>);
    console.log(servicesItems);
    return (
        <Section className={"MostServices"}>
            <PageTitle title={"Our services"} titleDescription={"Lorem ipsum dolor sit amet event landing template"}/>
            <Gallery className={"MostServices__gallery"}>
                {servicesItems}
            </Gallery>
        </Section>
    );
};

export default MostServices;
