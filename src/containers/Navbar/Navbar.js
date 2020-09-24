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
import Utility from "../../utility"

export default function NavBar()
{
    return (
        <AppBar color="default">
            <Toolbar>
                <Typography class="navbar-header" style={{flex: 1}} type="title" color="inherit" />
                <header class="navbar">
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
                    <IconButton aria-label="theme" color="inherit" hidden>
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