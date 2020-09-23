import React from "react";
import "./Navbar.scss";
import Utility from "../utility"

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
        <AppBar color="default">
            <Toolbar>
                {/*
                    I only have this typography to move the
                    buttons to the right side of the navbar.
                    
                    TODO: Change this so I don't need to have this
                    Typography component here.
                */}
                <Typography class="navbar-title" type="title" color="inherit">
                    David Ryan
                </Typography>
                <header>
                    {/* 
                        TODO: Remove the ripple effect when the
                        buttons are clicked (especially the menu button)
                    */}
                    <Button onClick={() => Utility.scrollToElement("home")} hidden>Home</Button>
                    <Button onClick={() => Utility.scrollToElement("about-me")} hidden>About Me</Button>
                    <Button onClick={() => Utility.scrollToElement("experience")} hidden>Experience</Button>
                    <Button onClick={() => Utility.scrollToElement("education", - 75)} hidden>Education</Button>
                    <Button onClick={() => Utility.scrollToElement("portfolio")} hidden>Portfolio</Button>
                    <Button onClick={() => Utility.scrollToElement("contact")} hidden>Contact</Button>
                    <IconButton aria-label="theme" color="inherit" hidden="false">
                        <InvertColorsIcon />
                    </IconButton>
                    <IconButton class="navbar-menu-button" aria-label="theme" color="inherit" hidden>
                        <MenuButtonIcon />
                    </IconButton>
                </header>
            </Toolbar>
        </AppBar>
    );
}