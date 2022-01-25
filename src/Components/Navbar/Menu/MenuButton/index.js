import React from "react";
import { useStyles} from "./styles";

function MenuButton({ clickHandler }) {
    const {
        menuButton,
        menuButtonBar,
        menuButtonBarOpened,
    } = useStyles();

    return (
        <div
            className={menuButton}
            onClick={clickHandler}
        >
            <div className={menuButtonBar} />
            <div className={menuButtonBar} />
            <div className={menuButtonBar} />
        </div>
    );
}

export default MenuButton;
