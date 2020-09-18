import React from "react";
import "../css/App.scss";

// Core Components
import { Parallax } from "react-parallax";

// Constant Variables
const parallaxBg = "https://ultrawidewallpapers.com/wp-content/uploads/2018/06/apple-mojave-night-3440x1440.jpg";
const parallaxStr = 750;
const divHeight = "25vh";

export default function ParallaxDivider()
{
    return (
        <>
            <Parallax bgImage={parallaxBg} strength={parallaxStr}>
                <section style={{height: divHeight}}/>
            </Parallax>
        </>
    );
}