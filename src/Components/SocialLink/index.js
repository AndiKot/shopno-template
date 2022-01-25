import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLink = ({ className, link, target = '_blank', rel = 'void', icon }) => {
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
