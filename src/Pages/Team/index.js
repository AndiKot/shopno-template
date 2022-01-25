import React from 'react';
import Section from "../../Components/Page";
import PageTitle from "../../Components/PageTitle";
import Gallery from "../../Components/Gallery";
import MemberInfo from "./MemberInfo";
import SocialLink from "../../Components/SocialLink";

import { useStyles } from "./styles";
import { teamList } from "./teamList";
import { socialsList } from "./socialsList";

const Team = () => {
    const {
        team,
        teamGallery,
        teamMemberTitle,
        teamMemberJob,
        teamMemberDescription,
        teamMemberSocials,
        teamMemberSocialsItem,
    } = useStyles();

    const teamMembers = teamList
        .map((member) => <MemberInfo
            key={member.imageUrl}
            backgroundImage={member.imageUrl}
        >
            <h3 className={teamMemberTitle}>
                {member.name} <em className={teamMemberJob}>{member.job}</em>
            </h3>
            <p className={teamMemberDescription}>{member.description}</p>
            <div className={teamMemberSocials}>
                {
                    Object.entries(member.socials)
                        .map((social, index) => <SocialLink
                            key={social[1] + index}
                            className={teamMemberSocialsItem}
                            link={social[1]}
                            target="_blank"
                            icon={socialsList[social[0]]}
                            />
                        )
                }
            </div>
        </MemberInfo>
        );

    return (
        <Section
            id="team"
            className={team}
        >
            <PageTitle
                title={"Small team"}
                titleDescription={"Lorem ipsum dolor sit amet event landing template"}
            />
            <Gallery className={teamGallery}>
                {teamMembers}
            </Gallery>
        </Section>
    );
};

export default Team;
