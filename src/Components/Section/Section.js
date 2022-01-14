import React from 'react';

import './Section.css';

function Section(props) {
    return (
        <section className={`Section ${props.className}`} style={props.style}>
            <div className={"container"}>
                {props.children}
            </div>
        </section>
    );
}

export default Section;
