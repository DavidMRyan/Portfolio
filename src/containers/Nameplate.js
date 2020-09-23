import React from "react";
import "./Style.scss";
import "./Nameplate.scss";
import Utility from "../utility"

// Core Components
import { Button } from "@material-ui/core";
import { Parallax } from "react-parallax";

// Icon Components
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// Constant Variables
const parallaxStr = 750;

export default function Nameplate()
{
    return (
        <Parallax bgImage="https://i.imgur.com/iWbnNbb.jpg" strength={parallaxStr}>
            <section class="section-container nameplate" id="home">
                <h1 class="nameplate-heading">DAVID RYAN</h1>
                <h2 class="nameplate-subheading">Computer Science Student &<br/>Self-Taught Software Developer</h2>

                <h2 class="read-more-text">Read More</h2>
                {/* 
                    TODO: Use the 'read-more-button' class in Nameplate.scss.
                    See 'Footer.js' for a more detailed explanation on why
                    this doesn't currently work, it's the same reason.
                */}
                <Button style={{marginTop: -30 + "px"}} onClick={() => Utility.scrollToElement("about-me")}>
                    <ExpandMoreIcon htmlColor="#ffffff" />
                </Button>
            </section>
        </Parallax>
    );
}