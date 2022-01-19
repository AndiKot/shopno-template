import React from 'react';
import {createUseStyles} from "react-jss";
import Section from "../../Components/Section/Section";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Gallery from "../../Components/Gallery/Gallery";
import MemberInfo from "./MemberInfo/MemberInfo";
import SocialLink from "../../Components/SocialLink/SocialLink";

import {teamList} from "./teamList";
import {socialsList} from "./socialsList";

const useStyles = createUseStyles({
    Team: {
        paddingTop: 122,
        paddingBottom: 118,
        backgroundColor: '#fff',
    },
    Team__gallery: {
        marginTop: 122,
        padding: '0 15px',
    },
    'Team-member__title': {
        marginBottom: 23,
        fontFamily: 'Merriweather, Times New Roman, sans',
        fontSize: '20px',
        fontWeight: 700,
        lineHeight: '24px',
    },
    'Team-member__occupation': {
        fontSize: '15px',
        fontWeight: 400,
        color: '#767070',
    },
    'Team-member__description': {
        fontFamily: 'Myriad Pro, sans-serif',
        fontSize: '16px',
        lineHeight: '24px',
    },
    'Team-member__socials': {
    },
    'Team-member__socials-item': {
        width: 16,
        height: 14,
        marginRight: 10,
        color: '#214946',
    },
});

const Team = ({...props}) => {
    const classes = useStyles();

    const teamMembers = teamList
        .map((member) => <MemberInfo key={member.imageUrl}
                                   backgroundImage={member.imageUrl}>
            <h3 className={classes['Team-member__title']}>{member.name} <em className={classes['Team-member__occupation']}>{member.occupation}</em></h3>
            <p className={classes['Team-member__description']}>{member.description}</p>
            <div className={classes['Team-member__socials']}>
                {
                    Object.entries(member.socials)
                        .map((social, index) => <SocialLink key={social[1] + index}
                                                            className={classes['Team-member__socials-item']}
                                                            link={social[1]}
                                                            target="_blank"
                                                            icon={socialsList[social[0]]}
                            />
                        )
                }
            </div>
        </MemberInfo>);

    return (
        <Section className={classes.Team}>
            <PageTitle title={"Small team"} titleDescription={"Lorem ipsum dolor sit amet event landing template"} />
            <Gallery className={classes.Team__gallery}>
                {teamMembers}
            </Gallery>
        </Section>
    );
};

export default Team;
