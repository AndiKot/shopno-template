import React from 'react';

import styles from './MemberInfo.module.css';

function MemberInfo(props) {
    const {title, titleDescription, backgroundImage} = props;
    return (
        <div className={styles.MemberInfo}>
            <img src={backgroundImage} alt={"Background"}/>
            <div className={styles.MemberInfo__description}>
                <h1>title</h1>
                <p>titleDescription</p>
            </div>
        </div>
    );
};

export default MemberInfo;
