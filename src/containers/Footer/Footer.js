import React from "react";
import "./Footer.scss";

// Core Components
import { IconButton } from "@material-ui/core";

// Icon Components
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Footer()
{
    return (
        <footer class="footer">
            <small class="copyright">
                &copy; Copyright 2018-{new Date().getFullYear()}, David Ryan. All Rights Reserved
            </small>

            {/* 
                TODO: Use the 'github-icon class in 'Footer.scss'
                The reason it doesn't work right now is because
                if I give either of the components the class, it
                overwrites all other classes; Basically I need to
                provide all of the classes in the attribute
                or else the button disappears.
            */}
            <IconButton style={{color: "#bababa"}} href="https://github.com/DavidMRyan" target="_blank">
                <GitHubIcon/>
            </IconButton>
        </footer>
    );
}