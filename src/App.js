import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline"

import ParallaxDivider from "./components/ParallaxDivider/ParallaxDivider";
import Navbar from "./containers/Navbar/Navbar";
import Nameplate from "./containers/Nameplate/Nameplate";
import AboutMe from "./containers/AboutMe/AboutMe";
import Experience from "./containers/Experience/Experience";
import Education from "./containers/Education/Education";
import Portfolio from "./containers/Portfolio/Portfolio";
import Contact from "./containers/Contact/Contact";
import Footer from "./containers/Footer/Footer";

export default function App()
{
    return (
        <div className="App" class="flex-grow">
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
        </div>
    );
}