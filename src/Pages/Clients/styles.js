import { createUseStyles } from "react-jss";
import clientsBackground from "../../img/Logos.jpg";

export const useStyles = createUseStyles({
    clients: {
        marginTop: 105,
        height: 268,
        overflow: "hidden",
    },
    clientsBackground: {
        width: '100%',
        height: 268,
        background: `url(${clientsBackground}) no-repeat`,
    },
    '@media (max-width: 1199px)': {

    },
    '@media (max-width: 991px)': {

    },
    '@media (max-width: 767px)': {

    },
    '@media (max-width: 575px)': {

    },
});
