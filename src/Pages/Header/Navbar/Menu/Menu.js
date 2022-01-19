import React, {useState} from "react";
import {createUseStyles} from "react-jss";
import MenuButton from "./MenuButton/MenuButton";

// function menuButtonHandler() {
//
// }

const useStyles = createUseStyles({
    Menu: {

    },
});

function createMenu() {

}

const Menu = ({...props}) => {
    let [isOpened, setIsOpened] = useState(false);

    const classes = useStyles();
    // const {menuList} = props;

    // const menu = isOpened

    return (
        isOpened
            ? <nav className={classes.Menu}>
                <MenuButton clickHandler={() => {
                    setIsOpened(!isOpened);
                    console.log(isOpened);
                }} />
            </nav>
            : <MenuButton clickHandler={() => {
            setIsOpened(!isOpened);
            console.log(isOpened);
        }}/>
    );
}

export default Menu;
