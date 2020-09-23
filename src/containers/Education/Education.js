import React from "react";
import "../Style.scss";
import "./Education.scss";

// Core Components
import { Grid } from "@material-ui/core";

export default function Education()
{
    return (
        <section class="container education" id="education">
            <article class="education-article">
                <h2 class="container-header education-header">EDUCATION</h2>
                <p class="container-paragraph education-paragraph">
                    As of right now, I have finished my first year attending SUNY Broome Community College
                    enrolled in the Computer Science (CSAS) Transfer program; I plan to transfer to Binghamton
                    University to finish this program and obtain my bachelor's degree.
                </p>
                <section class="list">
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <h3 class="list-header">High School Credits</h3>
                            <ul>
                                <li><p class="list-paragraph">Computer Science 1 & 2</p></li>
                                <li><p class="list-paragraph">AP Computer Science</p></li>
                            </ul>
                        </Grid>
                        <Grid item xs>
                            <h3 class="list-header">College Credits</h3>
                            <ul>
                                <li><p class="list-paragraph">Problem Solving & Communication Tools</p></li>
                                <li><p class="list-paragraph">Computer Concepts and Applications</p></li>
                                <li><p class="list-paragraph">Structured Programming</p></li>
                                <li><p class="list-paragraph">Digital Logic</p></li>
                            </ul>
                        </Grid>
                    </Grid>   
                </section>
            </article>
        </section>
    );
}