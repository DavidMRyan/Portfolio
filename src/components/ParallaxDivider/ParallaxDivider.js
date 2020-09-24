import React from "react";
import { Parallax } from "react-parallax";

import "./ParallaxDivider.scss";

// Constant Variables
const parallaxBg = "https://i.imgur.com/02Ncq7e.jpg";
const parallaxStr = 750;

export default function ParallaxDivider()
{
    return (
        <Parallax bgImage={parallaxBg} strength={parallaxStr}>
            <section class="parallax-divider" />
        </Parallax>
    );
}