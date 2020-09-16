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
import MenuButtonIcon from "@material-ui/icons/Menu";

export default function NavBar()
{
    return (
        <>
            <AppBar color="default">
                <Toolbar>
                    {/*
                        I only have this typography to move the
                        buttons to the right side of the navbar.
                        
                        TODO: Change this so I don't need to have this
                        Typography component here.
                    */}
                    <Typography type="title" color="inherit" style={{ flex: 1 }}></Typography>
                    <header>
                        {/* 
                            TODO: Remove the ripple effect when the
                            buttons are clicked (especially the menu button)
                        */}
                        <Button href="#" hidden>Home</Button>
                        <Button href="#" hidden>About Me</Button>
                        <Button href="#" hidden>Experience</Button>
                        <Button href="#" hidden>Education</Button>
                        <Button href="#" hidden>Portfolio</Button>
                        <Button href="#" hidden>Contact</Button>
                        <IconButton aria-label="theme" color="inherit" hidden="false">
                            <InvertColorsIcon />
                        </IconButton>
                        <IconButton class="navbar-menu-button" aria-label="theme" color="inherit" hidden>
                            <MenuButtonIcon />
                        </IconButton>
                    </header>
                </Toolbar>
            </AppBar>
        </>
    );
}