import React from "react";
import "../css/App.scss";

// Core Components
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
} from "@material-ui/core";

// Icon Components
import InvertColorsIcon from "@material-ui/icons/InvertColors";

export default function NavBar()
{
    return (
        <>
            <AppBar color="default" position="sticky">
                <Toolbar>
                    {/*
                        I only have this typography to move the
                        buttons to the right side of the navbar.
                        
                        TODO: Change this so I don't need to have this
                        Typography component here.
                    */}
                    <Typography type="title" color="inherit" style={{ flex: 1 }}></Typography>
                    <header>
                        <Button href="#">Home</Button>
                        <Button href="#">About Me</Button>
                        <Button href="#">Experience</Button>
                        <Button href="#">Education</Button>
                        <Button href="#">Portfolio</Button>
                        <Button href="#">Contact</Button>
                        <IconButton aria-label="theme" color="inherit">
                            <InvertColorsIcon />
                        </IconButton>
                    </header>
                </Toolbar>
            </AppBar>
        </>
    );
}