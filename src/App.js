import React from "react";
import { Parallax } from "react-parallax";
import Utility from "./utility"

// Core Components
import { Button } from "@material-ui/core";
import NavBar from "./modules/NavBar";

// Icon Components
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// Constant Variables
const parallaxBg = "https://ultrawidewallpapers.com/wp-content/uploads/2018/06/apple-mojave-night-3440x1440.jpg";
const parallaxStr = 750;
const divHeight = "100vh";

export default function App()
{
    return (
        <>
            <div className="App" style={{ flexgrow: 1 }}>
                <NavBar />
                <body>
                    {/* Introductory Nameplate Display */}
                    <Parallax bgImage={parallaxBg} strength={parallaxStr}>
                        <section id="home" class="nameplate" style={{ height: divHeight, textAlign: "center" }}>
                            <h1 class="heading">DAVID RYAN</h1>
                            <h2 class="subheading">Computer Science Student &<br/>Self-Taught Software Developer</h2>

                            <h5 class="read-more">Read More</h5>
                            <Button style={{ marginTop: -70 + "px"}} onClick={() => Utility.scrollToElement("about-me")}>
                                <ExpandMoreIcon htmlColor="#ffffff" />
                            </Button>
                        </section>
                    </Parallax>
                    
                    {/* About Me */}
                    <section id="about-me" style={{height: divHeight, textAlign: "center"}}>
                        <h1 class="body-heading-light">ABOUT ME</h1>
                        <h2 class="body-text-light">
                            Hello there! My name is David, and over the past 4 years I have been
                            actively learning how to program.I first discovered my love for web and 
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

                    <Parallax bgImage={parallaxBg} strength={parallaxStr}>
                        <section style={{ height: "25vh"}}/>
                    </Parallax>
                    
                    {/* Experience & Education */}
                    <section id="experience" style={{height: divHeight, textAlign: "center"}}>
                        <h1 class="body-heading-light">EXPERIENCE</h1>
                        <h2 class="body-text-light">This is the experience section of the webpage!</h2>

                        <article id="education">
                            <h1 class="body-heading-light" style={{paddingTop: "12%"}}>EDUCATION</h1>
                            <h2 class="body-text-light">This is the education section of the webpage!</h2>
                        </article>
                    </section>

                    <Parallax bgImage={parallaxBg} strength={parallaxStr}>
                        <section style={{ height: "25vh"}} />
                    </Parallax>
                    
                    {/* Portfolio (All Public Repositories) */}
                    <section id="portfolio" style={{height: divHeight, textAlign: "center"}}>
                        <h1 class="body-heading-light">PORTFOLIO</h1>
                        <h2 class="body-text-light">This is the portfolio section of the webpage!</h2>
                    </section>

                    {/* Contact (Name, Email, Subject, Message) */}
                    <section id="contact" style={{height: divHeight, textAlign: "center"}}>
                        <h1 class="body-heading-light">CONTACT</h1>
                        <h2 class="body-text-light">This is the contact section of the webpage!</h2>
                    </section>

                    {/* Webpage Footer (Social Media & Copyright Information) */}
                    <footer style={{height: "18vh"}}>
                    </footer>

                    <Parallax bgImage={parallaxBg} strength={parallaxStr}>
                        <section style={{ height: "20vh"}} />
                    </Parallax>
                </body>
            </div>
        </>
    );
}