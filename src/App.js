import React from "react";
import { Parallax } from "react-parallax";
import Utility from "./utility"

// Core Components
import { 
    Button,
    Grid,
    clsx,
    Typography,
    IconButton,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
    TextField
} from "@material-ui/core";
import NavBar from "./modules/NavBar";

// Icon Components
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShareIcon from "@material-ui/icons/Share";
import GitHubIcon from "@material-ui/icons/GitHub";

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
                        <section id="home" class="nameplate" style={{height: divHeight, textAlign: "center"}}>
                            <h1 class="heading">DAVID RYAN</h1>
                            <h2 class="subheading">Computer Science Student &<br/>Self-Taught Software Developer</h2>

                            <h5 class="read-more">Read More</h5>
                            <Button style={{marginTop: -70 + "px"}} onClick={() => Utility.scrollToElement("about-me")}>
                                <ExpandMoreIcon htmlColor="#ffffff" />
                            </Button>
                        </section>
                    </Parallax>
                    
                    {/* About Me */}
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

                    <Parallax bgImage={parallaxBg} strength={parallaxStr}>
                        <section style={{height: "25vh"}}/>
                    </Parallax>
                    
                    {/* Experience */}
                    <section id="experience" style={{height: divHeight, textAlign: "center"}}>
                        <h1 class="body-heading-light">EXPERIENCE</h1>
                        <nav style={{paddingLeft: "15%", paddingRight: "5%"}}>
                             <Grid container spacing={2}>
                                <Grid item xs>
                                    <h3 class="bulleted-nav-heading">Web Technologies</h3>
                                    <ul>
                                        <li>
                                            <h3 class="body-text-light-bulleted">HTML5</h3>
                                        </li>
                                        <li>
                                            <h3 class="body-text-light-bulleted">Javascript</h3>
                                        </li>
                                        <li>
                                            <h3 class="body-text-light-bulleted">ECMAScript 2009+</h3>
                                        </li>
                                        <li>
                                            <h3 class="body-text-light-bulleted">ReactJS Library</h3>
                                        </li>
                                        <li>
                                            <h3 class="body-text-light-bulleted">NodeJS & Express Framework</h3>
                                        </li>
                                    </ul>
                                </Grid>

                                <Grid item xs>
                                    <h3 class="bulleted-nav-heading">Software Development</h3>
                                    <ul>
                                        <li>
                                            <h3 class="body-text-light-bulleted">C++17</h3>
                                        </li>
                                        <li>
                                            <h3 class="body-text-light-bulleted">C# & .NET Framework 4.6.0+</h3>
                                        </li>
                                        <li>
                                            <h3 class="body-text-light-bulleted">C# Winforms (Desktop Applications)</h3>
                                        </li>
                                        <li>
                                            <h3 class="body-text-light-bulleted">SQL</h3>
                                        </li>
                                    </ul>
                                </Grid>

                                <Grid item xs>
                                    <h3 class="bulleted-nav-heading">Miscellaneous Skills</h3>
                                    <ul>
                                        <li>
                                            <h3 class="body-text-light-bulleted">Adobe Photoshop CC</h3>
                                        </li>
                                        <li>
                                            <h3 class="body-text-light-bulleted">Adobe After Effects CC</h3>
                                        </li>
                                        <li>
                                            <h3 class="body-text-light-bulleted">Adobe Illustrator CC</h3>
                                        </li>
                                        <li>
                                            <h3 class="body-text-light-bulleted">Subversion (Git)</h3>
                                        </li>
                                        <li>
                                            <h3 class="body-text-light-bulleted">FTP Client (WinSCP)</h3>
                                        </li>
                                        <li>
                                            <h3 class="body-text-light-bulleted">Linux Kernel & TTY<br/>(Ubuntu 16.04+, Arch)</h3>
                                        </li>
                                    </ul>
                                </Grid>
                            </Grid>
                        </nav>
                    </section>
                    <section id="education" style={{height: divHeight, textAlign: "center", marginTop: "-400px"}}>
                        <article style={{marginTop: "-175px"}}>
                            <h1 class="body-heading-light" style={{paddingTop: "12%"}}>EDUCATION</h1>
                            <h2 class="body-text-light-centered" style={{marginTop: "-50px"}}>
                                As of right now, I have finished my first year attending SUNY Broome Community College
                                enrolled in the Computer Science (CSAS) Transfer program; I plan to transfer to Binghamton
                                University to finish this program and obtain my bachelor's degree.
                            </h2>
                            <nav class="bulleted-nav">
                                <Grid container spacing={3}>
                                    {/* High School Credientials */}
                                    <Grid item xs>
                                        <h3 class="bulleted-nav-heading">High School Credits</h3>
                                        <ul>
                                            <li>
                                                <h3 class="body-text-light-bulleted">Computer Science 1 & 2</h3>
                                            </li>
                                            <li>
                                                <h3 class="body-text-light-bulleted">AP Computer Science</h3>
                                            </li>
                                        </ul>
                                    </Grid>

                                    {/* Collegiate Credentials */}
                                    <Grid item xs>
                                        <h3 class="bulleted-nav-heading">College Credits</h3>
                                        <ul>
                                            <li>
                                                <h3 class="body-text-light-bulleted">Problem Solving & Communication Tools</h3>
                                            </li>
                                            <li>
                                                <h3 class="body-text-light-bulleted">Computer Concepts and Applications</h3>
                                            </li>
                                            <li>
                                                <h3 class="body-text-light-bulleted">Structured Programming</h3>
                                            </li>
                                            <li>
                                                <h3 class="body-text-light-bulleted">Digital Logic</h3>
                                            </li>
                                        </ul>
                                    </Grid>
                                </Grid>   
                            </nav>
                        </article>
                    </section>

                    <Parallax bgImage={parallaxBg} strength={parallaxStr}>
                        <section style={{ height: "25vh"}} />
                    </Parallax>
                    
                    {/* Portfolio (All Public Repositories) */}
                    <section id="portfolio" style={{height: "60vh", textAlign: "center"}}>
                        <h1 class="body-heading-light">PORTFOLIO</h1>
                        <Grid container spacing={3} style={{paddingLeft: "5%", paddingRight: "5%"}}>
                            <Grid item xs>
                                <Card>
                                   <CardHeader title="Test Card Header Title" subheader="September 17, 2020">
                                        <CardMedia className="media" image={parallaxBg} title="Test Media Title"/>
                                   </CardHeader>
                                   <CardContent>
                                       <Typography variant="body2" color="inherit" component="p">
                                            This is a test typograhpy that will act as the body
                                            text of the card content. This text is a typography
                                            component and is a being used in a good way to test
                                            if this text will work or not for the card content body.
                                       </Typography>
                                   </CardContent>
                                   <CardActions>
                                        <IconButton aria-label="share">
                                            <ShareIcon />
                                        </IconButton>
                                        {/* <IconButton
                                            className={clsx({expand}, {
                                                [{expandOpen}]: expanded,
                                            })}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </IconButton> */}
                                   </CardActions>
                                </Card>
                            </Grid>

                            <Grid item xs>
                                <Card>
                                   <CardHeader title="Test Card Header Title" subheader="September 17, 2020">
                                        <CardMedia className="media" image={parallaxBg} title="Test Media Title"/>
                                   </CardHeader>
                                   <CardContent>
                                       <Typography variant="body2" color="inherit" component="p">
                                            This is a test typograhpy that will act as the body
                                            text of the card content. This text is a typography
                                            component and is a being used in a good way to test
                                            if this text will work or not for the card content body.
                                       </Typography>
                                   </CardContent>
                                   <CardActions>
                                        <IconButton aria-label="share">
                                            <ShareIcon />
                                        </IconButton>
                                        {/* <IconButton
                                            className={clsx({expand}, {
                                                [{expandOpen}]: expanded,
                                            })}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </IconButton> */}
                                   </CardActions>
                                </Card>
                            </Grid>

                            <Grid item xs>
                                <Card>
                                   <CardHeader title="Test Card Header Title" subheader="September 17, 2020">
                                        <CardMedia className="media" image={parallaxBg} title="Test Media Title"/>
                                   </CardHeader>
                                   <CardContent>
                                       <Typography variant="body2" color="inherit" component="p">
                                            This is a test typograhpy that will act as the body
                                            text of the card content. This text is a typography
                                            component and is a being used in a good way to test
                                            if this text will work or not for the card content body.
                                       </Typography>
                                   </CardContent>
                                   <CardActions>
                                        <IconButton aria-label="share">
                                            <ShareIcon />
                                        </IconButton>
                                        {/* <IconButton
                                            className={clsx({expand}, {
                                                [{expandOpen}]: expanded,
                                            })}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </IconButton> */}
                                   </CardActions>
                                </Card>
                            </Grid>

                            <Grid item xs>
                                <Card>
                                   <CardHeader title="Test Card Header Title" subheader="September 17, 2020">
                                        <CardMedia className="media" image={parallaxBg} title="Test Media Title"/>
                                   </CardHeader>
                                   <CardContent>
                                       <Typography variant="body2" color="inherit" component="p">
                                            This is a test typograhpy that will act as the body
                                            text of the card content. This text is a typography
                                            component and is a being used in a good way to test
                                            if this text will work or not for the card content body.
                                       </Typography>
                                   </CardContent>
                                   <CardActions>
                                        <IconButton aria-label="share">
                                            <ShareIcon />
                                        </IconButton>
                                        {/* <IconButton
                                            className={clsx({expand}, {
                                                [{expandOpen}]: expanded,
                                            })}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </IconButton> */}
                                   </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </section>

                    {/* Contact (Name, Email, Subject, Message) */}
                    <section id="contact" style={{height: "75vh"}}>
                        <h1 class="body-heading-light" style={{textAlign: "center"}}>CONTACT</h1>
                        <div style={{paddingLeft: "15%", paddingRight: "15%", marginTop: "-25px"}}>
                            <TextField required id="name-text-field" label="Name" type="search" fullWidth/>
                            <TextField required id="email-text-field" label="Email Address" type="search" fullWidth/>
                            <TextField required id="subject-text-field" label="Subject" type="search" fullWidth/>
                            <TextField id="message-text-field" label="Message" type="search" fullWidth
                                multiline rows={4} variant="outlined" style={{marginTop: "10px"}} color="inherit"
                            />
                            <Button variant="contained" style={{ marginTop: "10px"}}>Send</Button>
                        </div>
                    </section>

                    {/* Webpage Footer (Social Media & Copyright Information) */}
                    <footer style={{height: "15vh", textAlign: "center"}}>
                        <small class="copyright">
                            &copy; Copyright 2018-{new Date().getFullYear()}, David Ryan. All Rights Reserved
                        </small>
                        <IconButton style={{color: "#bababa"}} href="https://github.com/DavidMRyan" target="_blank">
                            <GitHubIcon/>
                        </IconButton>
                    </footer>

                    <Parallax bgImage={parallaxBg} strength={parallaxStr}>
                        <section style={{height: "20vh"}} />
                    </Parallax>
                </body>
            </div>
        </>
    );
}