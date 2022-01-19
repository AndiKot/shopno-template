import React, {useContext} from 'react';
import {createUseStyles} from "react-jss";
import {MapContext} from "../../Footer";

const useStyles = createUseStyles({
    Map: {
        display: 'block',
        position: 'absolute',
        border: 0,
    },
    Map__iframe: {
        border: 'none',
    }
});

const Map = ({...props}) => {
    const classes = useStyles();
    const mapSrc = useContext(MapContext);
    return (
        <div className={classes.Map}>
                <iframe className={classes.Map__iframe}
                        title={"Our location"}
                        src={mapSrc}
                        width="456"
                        height="224"
                        loading="lazy"></iframe>
        </div>
    );
};

export default Map;
