import React from "react";
import "../App.scss";

// Core Components
import { Grid } from "@material-ui/core";

// Constant Variables
const divHeight = "100vh";

export default function Experience()
{
    return (
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
    );
}