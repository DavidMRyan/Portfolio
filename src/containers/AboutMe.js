import React from "react";
import "../App.scss";

// Constant Variables
const divHeight = "100vh";

export default function AboutMe()
{
    return (
        <section id="about-me" style={{height: divHeight, textAlign: "center"}}>
            <h1 class="body-heading-light">ABOUT ME</h1>
            <h2 class="body-text-light-centered">
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
            </h2>
        </section>
    );
}