import React from "react";
import "./Style.scss";
import "./Experience.scss";

// Core Components
import { Grid } from "@material-ui/core";

export default function Experience()
{
    return (
        <section class="section-container" id="experience">
            <h2 class="section-header">EXPERIENCE</h2>
            <section class="experience-container">
                    <Grid container spacing={2}>
                    <Grid item xs>
                        <h3 class="bulleted-heading">Web Technologies</h3>
                        <ul>
                            <li><p class="bulleted-paragraph">HTML5</p></li>
                            <li><p class="bulleted-paragraph">Javascript</p></li>
                            <li><p class="bulleted-paragraph">ECMAScript 2009+</p></li>
                            <li><p class="bulleted-paragraph">ReactJS Library</p></li>
                            <li><p class="bulleted-paragraph">NodeJS & Express Framework</p></li>
                        </ul>
                    </Grid>
                    <Grid item xs>
                        <h3 class="bulleted-heading">Software Development</h3>
                        <ul>
                            <li><p class="bulleted-paragraph">C++17</p></li>
                            <li><p class="bulleted-paragraph">C# & .NET Framework 4.6.0+</p></li>
                            <li><p class="bulleted-paragraph">C# Winforms (Desktop Applications)</p></li>
                            <li><p class="bulleted-paragraph">SQL</p></li>
                        </ul>
                    </Grid>
                    <Grid item xs>
                        <h3 class="bulleted-heading">Miscellaneous Skills</h3>
                        <ul>
                            <li><p class="bulleted-paragraph">Adobe Photoshop CC</p></li>
                            <li><p class="bulleted-paragraph">Adobe After Effects CC</p></li>
                            <li><p class="bulleted-paragraph">Adobe Illustrator CC</p></li>
                            <li><p class="bulleted-paragraph">Subversion (Git)</p></li>
                            <li><p class="bulleted-paragraph">FTP Client (WinSCP)</p></li>
                            <li><p class="bulleted-paragraph">Linux Kernel & TTY<br/>(Ubuntu 16.04+, Arch)</p></li>
                        </ul>
                    </Grid>
                </Grid>
            </section>
        </section>
    );
}