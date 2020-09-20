import React from "react";

// Custom Components
import ParallaxDivider from "./components/ParallaxDivider";

// Containers
import NavBar from "./containers/NavBar";
import Nameplate from "./containers/Nameplate";
import AboutMe from "./containers/AboutMe";
import Experience from "./containers/Experience";
import Education from "./containers/Education";
import Portfolio from "./containers/Portfolio";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";

export default function App()
{
    return (
        <div className="App" style={{ flexgrow: 1 }}>
            <NavBar />
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