import React from "react";
import { IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "./Footer.scss";

export default function Footer()
{
    return (
        <footer className="footer">
            <small className="copyright">
                &copy; Copyright 2018-{new Date().getFullYear()}, David Ryan. All Rights Reserved
            </small>
            <br/>
            <IconButton className="github-icon" href="https://github.com/DavidMRyan" target="_blank">
                <GitHubIcon/>
            </IconButton>
            <IconButton className="linkedin-icon" href="https://www.linkedin.com/in/david-m-ryan/" target="_blank">
                <LinkedInIcon/>
            </IconButton>            
        </footer>
    );
}