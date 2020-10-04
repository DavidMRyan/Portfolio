import React from "react";
import { Parallax } from "react-parallax";

import "./ParallaxDivider.scss";

// Constant Variables
const parallaxBg = require("../../assets/img/nameplate.jpg");
const parallaxStr = 750;

export default function ParallaxDivider()
{
    return (
        <Parallax bgImage={parallaxBg} strength={parallaxStr}>
            <section className="parallax-divider" />
        </Parallax>
    );
}