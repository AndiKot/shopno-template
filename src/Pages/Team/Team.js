import React from 'react';

import './Team.css';
import Section from "../../Components/Section/Section";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Gallery from "../../Components/Gallery/Gallery";
import {importAll} from "../../utils/importImages";
import MemberInfo from "./MemberInfo/MemberInfo";

function Team(props) {
    const teamMembers = importAll(require.context('../../img/team', false, /\.(png|jpe?g|svg)$/))
        .map((item, index) => <MemberInfo key={item}
                                          backgroundImage={item}
                                          title={"Title"}
                                          titleDescription={"Title description"}
        ></MemberInfo>);

    return (
        <Section className={"Team"}>
            <PageTitle title={"Small team"} titleDescription={"Lorem ipsum dolor sit amet event landing template"} />
            <Gallery className={"Team__gallery"}>
                {teamMembers}
            </Gallery>
        </Section>
    );
};

export default Team;
