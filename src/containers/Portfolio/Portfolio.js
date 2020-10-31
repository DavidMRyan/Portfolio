import React from "react";
import {
    Grid,
    Typography,
} from "@material-ui/core";

import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";

import "./Portfolio.scss";

export default function Portfolio()
{
    return (
        <Grid className="portfolio" id="portfolio" container direction="row" justify="center">
            <Typography className="portfolio-header" component="h2">PORTFOLIO</Typography>
            <Grid className="list portfolio-grid-container" container spacing={3}>
                <Grid item xs={12} lg={6}>
                    <PortfolioCard
                        title="Dead by Daylight Launcher"
                        date="November 23, 2019"
                        image={require("../../assets/img/Portfolio/DBD-Launcher.jpg")}
                        repository="https://github.com/DavidMRyan/DeadByDaylightLauncher"
                    >
                        This project was initially started when I was really into a video game called Dead by Daylight;  
                        I found myself searching for a way to change the in-game resolution, UI textures, and other 
                        features that were a hassle to change in the past. Prior to this custom launcher, in order to change these
                        settings you'd have to edit .INI files manually and it wasn't very user-friendly. This utility acts 
                        as a graphical user interface to edit the afore-mentioned .INI files and provide a much nicer 
                        environment for tweaking these settings to your liking. (More information can be found on the Github 
                        Repository below)
                    </PortfolioCard>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <PortfolioCard
                        title="Portfolio Website"
                        date="September 12, 2020"
                        image={require("../../assets/img/Portfolio/Website-Portfolio.jpg")}
                        repository="https://github.com/DavidMRyan/Portfolio"
                    >
                        I started this project in order to create a place to house and showcase all my past and present  
                        Computer Science projects. This website, supplemented with my resume, will (hopefully) help me land 
                        a good job and serve a useful purpose in the future. Not only will this website be of use to me, it's also 
                        a way for me to get creative with the ways I show off my projects to friends, family, and colleagues. Having 
                        a website in my own name is a very exciting thing for me and the simple fact that other people can read about 
                        the projects I've created is just amazing.
                    </PortfolioCard>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <PortfolioCard
                        title="Call of Duty 4 Compile Tools"
                        date="March 10, 2019"
                        image={require("../../assets/img/Portfolio/404.jpg")}
                        repository="https://github.com/DavidMRyan/CallofDuty4CompileTools"
                    >
                        The intent of this project was to create a more stable and user-friendly interface for compiling custom 
                        levels for the game Call of Duty 4 Modern Warfare. I have the base layout of this project finished but 
                        in all honesty I haven't updated it at all recently (Probably a year or more since it's seen active development) 
                        and it more than likely needs a bunch of refactoring. I do plan on finishing this project in the near future actually 
                        so if you're interested in this one be sure to keep your eyes peeled!
                    </PortfolioCard>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <PortfolioCard
                        title="Super Mario Bros."
                        date="May 13, 2019"
                        image={require("../../assets/img/Portfolio/404.jpg")}
                        repository="https://github.com/DavidMRyan/SuperMarioBros"
                    >
                        This was a high school project that I created for my final culminating project in Computer Science 1 & 2;  
                        I was trying to be overly ambitious with my (at the time) very basic understanding of Common Javascript, 
                        so if you clone this repository and test the project for yourself, be warned that it doesn't quite work 
                        as intended, and is *extremely* buggy and unfinished. I would like to revisit this project some day, but I feel 
                        that the HTML5 canvas foundation I've layed out for this isn't going to cut it, and I would probably move to 
                        something like WebGL or just create my own game engine in something like DirectX for a desktop environment.
                        (This project s for educational purposes only, please don't sue me Nintendo)
                    </PortfolioCard>
                </Grid>
            </Grid>
        </Grid>
    );
}