import React from "react";
import {
    Typography,
    Grid
 } from "@material-ui/core";

import "./AboutMe.scss";
import "../Style.scss";

export default function AboutMe()
{
    return (
        <Grid className="about-me" id="about-me" container justify="center" alignItems="center">
            <section>
                <Typography className="about-me-header" component="h2">ABOUT ME</Typography>
                <Typography className="about-me-paragraph" component="p">
                    Hello there! My name is David, and over the past 4 years I have been
                    actively learning how to program. I first discovered my love for web and 
                    software development back on a game called Call of Duty 4, creating custom levels 
                    with scripted events. From that point on I decided that I wanted to have a career 
                    in computer science, and began self teaching myself different things; By the time 
                    I had gotten into my junior year of high school I had a good understanding of the basics, 
                    and decided to take academic courses to better my understanding of programming as a whole.
                    Fast forward to the present day I am enrolled in my second year of college and am working 
                    my way words obtaining my bachelor's degree in computer science. My ultimate goal is to be
                    an exceptionally well rounded developer who is able to reach new heights with modern technology.
                </Typography>
            </section>
        </Grid>
    );
}