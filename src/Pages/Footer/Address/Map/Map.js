import React from 'react';

import './Map.css';

function Map() {
    return (
        <div className={"Map"}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2329.7189325784684!2d30.51352513816232!3d50.44899323023988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce59e3ab65a7%3A0x694b8565cab02eaf!2z0JfQvtC70L7RgtGL0LUg0LLQvtGA0L7RgtCw!5e0!3m2!1sru!2sua!4v1642107367326!5m2!1sru!2sua"
                width="456" height="224" loading="lazy"></iframe>
        </div>
    );
};

export default Map;
