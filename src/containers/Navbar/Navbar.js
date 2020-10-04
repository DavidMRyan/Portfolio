import React from "react";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import MenuButtonIcon from "@material-ui/icons/Menu";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
} from "@material-ui/core";

import "./Navbar.scss";
import "../../App.scss"
import "../../Responsive.scss"
import Utility from "../../utility"

export default function Navbar()
{
    return (
        <AppBar color="default">
            <Toolbar>
                <nav className="navbar">
                    <Typography style={{flex: 1}} type="title" color="inherit" />   
                    {/* 
                        TODO: Remove the ripple effect when the
                        buttons are clicked (especially the menu button)
                    */}
                    <Button onClick={() => Utility.scrollToElement("home")} hidden>Home</Button>
                    <Button onClick={() => Utility.scrollToElement("about-me")} hidden>About Me</Button>
                    <Button onClick={() => Utility.scrollToElement("experience")} hidden>Experience</Button>
                    <Button onClick={() => Utility.scrollToElement("education")} hidden>Education</Button>
                    <Button onClick={() => Utility.scrollToElement("portfolio")} hidden>Portfolio</Button>
                    <Button onClick={() => Utility.scrollToElement("contact")} hidden>Contact</Button>
                    <IconButton aria-label="theme" color="inherit" hidden>
                        <InvertColorsIcon />
                    </IconButton>
                    {/*
                        TODO: Fix the button so its on the right
                        side of the navbar once again.
                    */}
                    <IconButton className="navbar-menu-button" aria-label="theme" color="inherit" hidden>
                        <MenuButtonIcon />
                    </IconButton>
                </nav>
            </Toolbar>
        </AppBar>
    );
}