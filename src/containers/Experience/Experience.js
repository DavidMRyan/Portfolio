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
        <Grid className="experience" id="experience" container direction="row" justify="center">
            <Typography className="experience-header" component="h2">EXPERIENCE</Typography>
            <section className="experience">
                <Grid className="list" container justify="space-around">
                    <Grid item sm={12} md={4}>
                    <section className="list">
                        <Typography className="list-header" component="h3">Web Technologies</Typography>
                        <ul className="list-unordered">
                            <li><Typography className="list-paragraph" component="p">• HTML5</Typography></li>
                            <li><Typography className="list-paragraph" component="p">• Javascript</Typography></li>
                            <li><Typography className="list-paragraph" component="p">• ECMAScript 2009+</Typography></li>
                            <li><Typography className="list-paragraph" component="p">• ReactJS Library</Typography></li>
                            <li><Typography className="list-paragraph" component="p">• NodeJS</Typography></li>
                            <li><Typography className="list-paragraph" component="p">• Express Framework</Typography></li>
                        </ul>
                    </section>
                    </Grid>
                    <Grid item sm={12} md={4}>
                    <section className="list">
                        <Typography className="list-header" component="h3">Software Development</Typography>
                        <ul className="list-unordered">
                            <li><Typography className="list-paragraph" component="p">• C++17</Typography></li>
                            <li><Typography className="list-paragraph" component="p">• C# & .NET Framework 4.6.0+</Typography></li>
                            <li><Typography className="list-paragraph" component="p">• C# Winforms<br/>(Desktop Applications)</Typography></li>
                            <li><Typography className="list-paragraph" component="p">• Python 2.7.2+</Typography></li>
                            <li><Typography className="list-paragraph" component="p">• SQL</Typography></li>
                        </ul>
                    </section>
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <section className="list">
                            <Typography className="list-header" component="h3">Miscellaneous Skills</Typography>
                            <ul className="list-unordered">
                                <li><Typography className="list-paragraph" component="p">• Adobe Photoshop CC</Typography></li>
                                <li><Typography className="list-paragraph" component="p">• Adobe After Effects CC</Typography></li>
                                <li><Typography className="list-paragraph" component="p">• Adobe Illustrator CC</Typography></li>
                                <li><Typography className="list-paragraph" component="p">• Subversion (Git)</Typography></li>
                                <li><Typography className="list-paragraph" component="p">• FTP Client (WinSCP)</Typography></li>
                                <li><Typography className="list-paragraph" component="p">• Linux Kernel & TTY<br/>(Ubuntu 16.04+, Arch)</Typography></li>
                            </ul>
                        </section>
                    </Grid>
                </Grid>
            </section>
        </Grid>
    );
}