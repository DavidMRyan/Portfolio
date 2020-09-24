import React from "react";
import {
    Grid,
    Typography
} from "@material-ui/core";

import "../Style.scss";
import "./Education.scss";

export default function Education()
{
    return (
        <section class="container education" id="education">
            <article class="education-article">
                <Typography class="container-header education-header" component="h2">EDUCATION</Typography>
                <Typography class="container-paragraph education-paragraph" component="p">
                    As of right now, I have finished my first year attending SUNY Broome Community College
                    enrolled in the Computer Science (CSAS) Transfer program; I plan to transfer to Binghamton
                    University to finish this program and obtain my bachelor's degree.
                </Typography>
                <section class="list">
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <Typography class="list-header" component="h3">High School Credits</Typography>
                            <ul>
                                <li><Typography class="list-paragraph" component="p">Computer Science 1 & 2</Typography></li>
                                <li><Typography class="list-paragraph" component="p">AP Computer Science</Typography></li>
                            </ul>
                        </Grid>
                        <Grid item xs>
                            <Typography class="list-header" component="h3">College Credits</Typography>
                            <ul>
                                <li><Typography class="list-paragraph" component="p">Problem Solving & Communication Tools</Typography></li>
                                <li><Typography class="list-paragraph" component="p">Computer Concepts and Applications</Typography></li>
                                <li><Typography class="list-paragraph" component="p">Structured Programming</Typography></li>
                                <li><Typography class="list-paragraph" component="p">Digital Logic</Typography></li>
                            </ul>
                        </Grid>
                    </Grid>   
                </section>
            </article>
        </section>
    );
}