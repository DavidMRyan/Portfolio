import React from "react";
import "../Style.scss";
import "./Experience.scss";

// Core Components
import { Grid } from "@material-ui/core";

export default function Experience()
{
    return (
        <section class="container" id="experience">
            <h2 class="container-header">EXPERIENCE</h2>
            <section class="experience">
                    <Grid container spacing={2}>
                    <Grid item xs>
                    <section class="list">
                        <h3 class="list-heading">Web Technologies</h3>
                        <ul>
                            <li><p class="list-paragraph">HTML5</p></li>
                            <li><p class="list-paragraph">Javascript</p></li>
                            <li><p class="list-paragraph">ECMAScript 2009+</p></li>
                            <li><p class="list-paragraph">ReactJS Library</p></li>
                            <li><p class="list-paragraph">NodeJS & Express Framework</p></li>
                        </ul>
                    </section>
                    </Grid>
                    <Grid item xs>
                    <section class="list">
                        <h3 class="list-heading">Software Development</h3>
                        <ul>
                            <li><p class="list-paragraph">C++17</p></li>
                            <li><p class="list-paragraph">C# & .NET Framework 4.6.0+</p></li>
                            <li><p class="list-paragraph">C# Winforms (Desktop Applications)</p></li>
                            <li><p class="list-paragraph">SQL</p></li>
                        </ul>
                    </section>
                    </Grid>
                    <Grid item xs>
                        <section class="list">
                            <h3 class="list-heading">Miscellaneous Skills</h3>
                            <ul>
                                <li><p class="list-paragraph">Adobe Photoshop CC</p></li>
                                <li><p class="list-paragraph">Adobe After Effects CC</p></li>
                                <li><p class="list-paragraph">Adobe Illustrator CC</p></li>
                                <li><p class="list-paragraph">Subversion (Git)</p></li>
                                <li><p class="list-paragraph">FTP Client (WinSCP)</p></li>
                                <li><p class="list-paragraph">Linux Kernel & TTY<br/>(Ubuntu 16.04+, Arch)</p></li>
                            </ul>
                        </section>
                    </Grid>
                </Grid>
            </section>
        </section>
    );
}