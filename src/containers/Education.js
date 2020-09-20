import React from "react";
import "../App.scss";

// Core Components
import { Grid } from "@material-ui/core";

// Constant Variables
const divHeight = "100vh";

export default function Education()
{
    return (
        <section id="education" style={{height: divHeight, textAlign: "center", marginTop: "-400px"}}>
            <article style={{marginTop: "-175px"}}>
                <h1 class="body-heading-light" style={{paddingTop: "12%"}}>EDUCATION</h1>
                <h2 class="body-text-light-centered" style={{marginTop: "-50px"}}>
                    As of right now, I have finished my first year attending SUNY Broome Community College
                    enrolled in the Computer Science (CSAS) Transfer program; I plan to transfer to Binghamton
                    University to finish this program and obtain my bachelor's degree.
                </h2>
                <nav class="bulleted-nav">
                    <Grid container spacing={3}>
                        {/* High School Credientials */}
                        <Grid item xs>
                            <h3 class="bulleted-nav-heading">High School Credits</h3>
                            <ul>
                                <li>
                                    <h3 class="body-text-light-bulleted">Computer Science 1 & 2</h3>
                                </li>
                                <li>
                                    <h3 class="body-text-light-bulleted">AP Computer Science</h3>
                                </li>
                            </ul>
                        </Grid>

                        {/* Collegiate Credentials */}
                        <Grid item xs>
                            <h3 class="bulleted-nav-heading">College Credits</h3>
                            <ul>
                                <li>
                                    <h3 class="body-text-light-bulleted">Problem Solving & Communication Tools</h3>
                                </li>
                                <li>
                                    <h3 class="body-text-light-bulleted">Computer Concepts and Applications</h3>
                                </li>
                                <li>
                                    <h3 class="body-text-light-bulleted">Structured Programming</h3>
                                </li>
                                <li>
                                    <h3 class="body-text-light-bulleted">Digital Logic</h3>
                                </li>
                            </ul>
                        </Grid>
                    </Grid>   
                </nav>
            </article>
        </section>
    );
}