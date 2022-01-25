import React from "react";
import Page from "../../Components/Page";
import Button from "./Button"
import { useStyles } from "./styles";

const Header = () => {
    const {
        header,
        headerTitle,
    } = useStyles();

    return (
        <Page
            id="home"
            className={header}
        >
            <div className={"Header__content"}>
                <h1 className={headerTitle}>
                    Say hello to <em>shopno!</em><br /><em>agency</em> corporate shopno theme
                </h1>
                <Button>
                    contact us
                </Button>
            </div>
        </Page>
    );
}

export default Header;
