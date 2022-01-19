import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SocialLink = ({...props}) => {
    const {className, link, target = '_blank', rel = 'void', icon} = props;
    return (
        <a className={className}
           href={link}
           target={target}
           rel={rel}
        >
            <FontAwesomeIcon icon={icon} />
        </a>
    );
};

export default SocialLink;
