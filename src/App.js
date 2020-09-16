import React from "react";
import { Parallax } from "react-parallax";

// Core Components
import { Button } from "@material-ui/core";
import NavBar from "./modules/NavBar";

// Icon Components
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function App()
{
    return (
        <>
            <div className="App" style={{ flexgrow: 1 }}>
                <NavBar />
                <body>                   
                    <Parallax bgImage={"https://ultrawidewallpapers.com/wp-content/uploads/2018/06/apple-mojave-night-3440x1440.jpg"} strength={750}>
                        <section class="nameplate" style={{ height: "100vh", textAlign: "center" }}>
                            <h1 class="heading">DAVID RYAN</h1>
                            <h2 class="subheading">Computer Science Student &<br/>Self-Taught Software Developer</h2>

                            <h5 class="read-more">Read More</h5>
                            <Button href="#" style={{ marginTop: -70 + "px"}}>
                                <ExpandMoreIcon htmlColor="#ffffff" />
                            </Button>                
                        </section>
                    </Parallax>
                    
                    {/*--- Scroll Testing Only! ---*/}
                    <div style={{height: "100vh"}}></div>
                </body>
            </div>
        </>
    );
}