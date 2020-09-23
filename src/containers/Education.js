import React from "react";
import "./Style.scss";
import "./Education.scss";

// Core Components
import { Grid } from "@material-ui/core";

export default function Education()
{
    return (
        <section class="section-container education-container" id="education">
            <article class="education-article">
                <h2 class="section-header education-header">EDUCATION</h2>
                <p class="section-paragraph education-paragraph">
                    As of right now, I have finished my first year attending SUNY Broome Community College
                    enrolled in the Computer Science (CSAS) Transfer program; I plan to transfer to Binghamton
                    University to finish this program and obtain my bachelor's degree.
                </p>
                <section class="bulleted-container">
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <h3 class="bulleted-heading">High School Credits</h3>
                            <ul>
                                <li><p class="bulleted-paragraph">Computer Science 1 & 2</p></li>
                                <li><p class="bulleted-paragraph">AP Computer Science</p></li>
                            </ul>
                        </Grid>
                        <Grid item xs>
                            <h3 class="bulleted-heading">College Credits</h3>
                            <ul>
                                <li><p class="bulleted-paragraph">Problem Solving & Communication Tools</p></li>
                                <li><p class="bulleted-paragraph">Computer Concepts and Applications</p></li>
                                <li><p class="bulleted-paragraph">Structured Programming</p></li>
                                <li><p class="bulleted-paragraph">Digital Logic</p></li>
                            </ul>
                        </Grid>
                    </Grid>   
                </section>
            </article>
        </section>
    );
}