import React from "react";
import "../App.scss";
import Utility from "../utility"

// Core Components
import { Button } from "@material-ui/core";
import { Parallax } from "react-parallax";

// Icon Components
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// Constant Variables
const parallaxStr = 750;
const divHeight = "100vh";

export default function Nameplate()
{
    return (
        <Parallax bgImage="images/1.jpg" strength={parallaxStr}>
            <section id="home" class="nameplate" style={{height: divHeight, textAlign: "center"}}>
                <h1 class="heading">DAVID RYAN</h1>
                <h2 class="subheading">Computer Science Student &<br/>Self-Taught Software Developer</h2>

                <h5 class="read-more">Read More</h5>
                <Button style={{marginTop: -70 + "px"}} onClick={() => Utility.scrollToElement("about-me")}>
                    <ExpandMoreIcon htmlColor="#ffffff" />
                </Button>
            </section>
        </Parallax>
    );
}