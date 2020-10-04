import React from "react";
import { Parallax } from "react-parallax";
import {
    Button,
    Typography,
    Grid
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "../Style.scss";
import "./Nameplate.scss";
import Utility from "../../utility"

export default function Nameplate()
{
    return (
        <Parallax bgImage="https://i.imgur.com/iWbnNbb.jpg" strength="750">
            <Grid className="nameplate" id="home" container
                direction="column" justify="center" alignItems="center"
            >
                <Typography className="nameplate-header" component="h1">DAVID RYAN</Typography>
                <Typography className="nameplate-subheader" component="h2">
                    Computer Science Student &<br/>Self-Taught Software Developer
                </Typography> 
                <Typography className="read-more" component="h2">Read More</Typography>
                <Button id="read-more-button" className="read-more-button"
                    onClick={() => Utility.scrollToElement("about-me")}
                >
                    <ExpandMoreIcon htmlColor="#ffffff" />
                </Button> 
            </Grid>
        </Parallax>
    );
}