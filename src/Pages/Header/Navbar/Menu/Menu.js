import React, {useState} from "react";
import MenuButton from "./MenuButton/MenuButton";

import "./Menu.css";

// function menuButtonHandler() {
//
// }

function createMenu() {

}

function Menu(props) {
    let [isOpened, setIsOpened] = useState(false);

    // const {menuList} = props;

    // const menu = isOpened

    return (
        isOpened
            ? <nav className={"Menu"}>
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
