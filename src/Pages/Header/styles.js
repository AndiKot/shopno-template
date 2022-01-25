import { createUseStyles } from "react-jss";
import background from "../../img/Header-Glass.jpg";


export const useStyles = createUseStyles({
    header: {
        position: 'relative',
        height: 806,
        paddingTop: 64,
        background: `url(${background}) bottom 154px right 95px no-repeat`,

    },
    headerTitle: {
        marginTop: 189,
        fontSize: 45,
        fontWeight: 'bold',
        lineHeight: '59px',
        color: '#505050',
        textAlign: 'center',
        letterSpacing: 1,
        textTransform: 'uppercase',
        textShadow: '4px 8px 8px rgba(0, 0, 0, 0.24)',
        '& em': {
            display: 'inline-block',
            padding: '0 11px',
            fontStyle: 'inherit',
            backgroundColor: '#b2f2ee',
        }
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
