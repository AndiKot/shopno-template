import React from "react";
import { useStyles} from "./styles";

function Button({ children }) {
    const { button } = useStyles();

    return (
        <button className={button}>{children}</button>
    );
}

export default Button;
