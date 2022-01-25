import React from 'react';
import { useStyles } from "./styles";



const MemberInfo = ({ backgroundImage, children }) => {
    const {
        memberInfo,
        memberInfoDescription,
        memberInfoImage,
    } = useStyles();

    return (
        <div className={memberInfo}>
            <img
                className={memberInfoImage}
                src={backgroundImage}
                alt={"Background"}
            />
            <div className={memberInfoDescription}>
                {children}
            </div>
        </div>
    );
};

export default MemberInfo;
