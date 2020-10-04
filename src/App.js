import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
    createMuiTheme,
    MuiThemeProvider,
    responsiveFontSizes
} from "@material-ui/core/styles";

import ParallaxDivider from "./components/ParallaxDivider/ParallaxDivider";
import Navbar from "./containers/Navbar/Navbar";
import Nameplate from "./containers/Nameplate/Nameplate";
import AboutMe from "./containers/AboutMe/AboutMe";
import Experience from "./containers/Experience/Experience";
import Education from "./containers/Education/Education";
import Portfolio from "./containers/Portfolio/Portfolio";
import Contact from "./containers/Contact/Contact";
import Footer from "./containers/Footer/Footer";
import "./Responsive.scss";

let theme = responsiveFontSizes(createMuiTheme());

export default function App()
{
    return (
        <div className="App flex-grow">
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Navbar />
                <Nameplate />
                <AboutMe />
                <ParallaxDivider />
                <Experience />
                <Education />
                <ParallaxDivider />
                <Portfolio />
                <Contact />
                <Footer />
            </MuiThemeProvider>
        </div>
    );
}