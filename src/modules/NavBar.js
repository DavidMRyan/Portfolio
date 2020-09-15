import React from "react";
import "../css/App.scss";

// Core Components
import { AppBar, Toolbar, Button, IconButton } from "@material-ui/core";

// Icon Components
import InvertColorsIcon from "@material-ui/icons/InvertColors";

function NavBar() {
    return (
        <>
            <AppBar color="default">
                <Toolbar>
                    <Button
                        color="inherit"
                        style={{ marginright: 8 + "px" }}
                        href="#"
                    >
                        Home
                    </Button>
                    <Button
                        color="inherit"
                        style={{ marginright: 8 + "px" }}
                        href="#"
                    >
                        About Me
                    </Button>
                    <Button
                        color="inherit"
                        style={{ marginright: 8 + "px" }}
                        href="#"
                    >
                        Experience
                    </Button>
                    <Button
                        color="inherit"
                        style={{ marginright: 8 + "px" }}
                        href="#"
                    >
                        Education
                    </Button>
                    <Button
                        color="inherit"
                        style={{ marginright: 8 + "px" }}
                        href="#"
                    >
                        Portfolio
                    </Button>
                    <Button
                        color="inherit"
                        style={{ marginright: 8 + "px" }}
                        href="#"
                    >
                        Contact
                    </Button>
                    <IconButton aria-label="theme" color="inherit">
                        <InvertColorsIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default NavBar;
