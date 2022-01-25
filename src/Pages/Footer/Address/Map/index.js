import React, {useContext} from 'react';
import {useStyles} from "./styles";
import {MapContext} from "../../index";

const Map = () => {
    const {
        map,
        mapIframe,
    } = useStyles();
    const mapSrc = useContext(MapContext);

    return (
        <div className={map}>
                <iframe className={mapIframe}
                        title={"Our location"}
                        src={mapSrc}
                        loading="lazy" />
        </div>
    );
};

export default Map;
