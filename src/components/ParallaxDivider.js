import React from "react";
import "../App.scss";

// Core Components
import { Parallax } from "react-parallax";

// Constant Variables
const parallaxBg = "https://i.imgur.com/02Ncq7e.jpg";
const parallaxStr = 750;
const divHeight = "25vh";

export default function ParallaxDivider()
{
    return (
        <Parallax bgImage={parallaxBg} strength={parallaxStr}>
            <section style={{height: divHeight}}/>
        </Parallax>
    );
}