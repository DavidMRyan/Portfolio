import React from "react";
import {
    Grid,
    Typography
} from "@material-ui/core";

import "../Style.scss";
import "./Experience.scss";

export default function Experience()
{
    return (
        <section class="container" id="experience">
            <Typography class="container-header" component="h2">Experience</Typography>
            <section class="experience">
                    <Grid container spacing={2}>
                    <Grid item xs>
                    <section class="list">
                        <Typography class="list-header" component="h3">Web Technologies</Typography>
                        <ul>
                            <li><Typography class="list-paragraph" component="p">HTML5</Typography></li>
                            <li><Typography class="list-paragraph" component="p">Javascript</Typography></li>
                            <li><Typography class="list-paragraph" component="p">ECMAScript 2009+</Typography></li>
                            <li><Typography class="list-paragraph" component="p">ReactJS Library</Typography></li>
                            <li><Typography class="list-paragraph" component="p">NodeJS & Express Framework</Typography></li>
                        </ul>
                    </section>
                    </Grid>
                    <Grid item xs={6}>
                    <section class="list">
                        <Typography class="list-header" component="h3">Software Development</Typography>
                        <ul>
                            <li><Typography class="list-paragraph" component="p">C++17</Typography></li>
                            <li><Typography class="list-paragraph" component="p">C# & .NET Framework 4.6.0+</Typography></li>
                            <li><Typography class="list-paragraph" component="p">C# Winforms (Desktop Applications)</Typography></li>
                            <li><Typography class="list-paragraph" component="p">SQL</Typography></li>
                        </ul>
                    </section>
                    </Grid>
                    <Grid item xs>
                        <section class="list">
                            <Typography class="list-header" component="h3">Miscellaneous Skills</Typography>
                            <ul>
                                <li><Typography class="list-paragraph" component="p">Adobe Photoshop CC</Typography></li>
                                <li><Typography class="list-paragraph" component="p">Adobe After Effects CC</Typography></li>
                                <li><Typography class="list-paragraph" component="p">Adobe Illustrator CC</Typography></li>
                                <li><Typography class="list-paragraph" component="p">Subversion (Git)</Typography></li>
                                <li><Typography class="list-paragraph" component="p">FTP Client (WinSCP)</Typography></li>
                                <li><Typography class="list-paragraph" component="p">Linux Kernel & TTY<br/>(Ubuntu 16.04+, Arch)</Typography></li>
                            </ul>
                        </section>
                    </Grid>
                </Grid>
            </section>
        </section>
    );
}