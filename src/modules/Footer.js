import React from "react";
import "../css/App.scss";

// Core Components
import { IconButton } from "@material-ui/core";

// Icon Components
import GitHubIcon from "@material-ui/icons/GitHub";

// Constant Variables
const footerHeight = "15vh";
const githubIconColor = "#bababa";

export default function Footer()
{
    return (
        <>
            <footer style={{height: footerHeight, textAlign: "center"}}>
                <small class="copyright">
                    &copy; Copyright 2018-{new Date().getFullYear()}, David Ryan. All Rights Reserved
                </small>

                <IconButton style={{color: githubIconColor}} href="https://github.com/DavidMRyan" target="_blank">
                    <GitHubIcon/>
                </IconButton>
            </footer>
        </>
    );
}