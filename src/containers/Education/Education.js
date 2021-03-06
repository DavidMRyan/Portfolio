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
        <section id="education">
            <Grid className="education" container direction="row" justify="center">
                <article>
                    <Typography className="education-header" component="h2">EDUCATION</Typography>
                    <Typography className="education-paragraph education-paragraph" component="p">
                        As of right now, I have finished my first year attending SUNY Broome Community College
                        enrolled in the Computer Science (CSAS) Transfer program; I plan to transfer to Binghamton
                        University to finish this program and obtain my bachelor's degree.
                    </Typography>
                        <Grid container>
                            <Grid item sm={12} md={6}>
                            <section className="list">
                                <Typography className="list-header" component="h3">High School Credentials</Typography>
                                <ul className="list-unordered">
                                    <li><Typography className="list-paragraph" component="p">• Computer Science 1 & 2</Typography></li>
                                    <li><Typography className="list-paragraph" component="p">• AP Computer Science</Typography></li>
                                </ul>
                            </section>
                            </Grid>
                            <Grid item sm={12} md={6}>
                            <section className="list">
                                <Typography className="list-header" component="h3">College Credentials</Typography>
                                 <ul className="list-unordered">
                                        <li><Typography className="list-paragraph" component="p">• Problem Solving & Communication Tools</Typography></li>
                                        <li><Typography className="list-paragraph" component="p">• Computer Concepts and Applications</Typography></li>
                                        <li><Typography className="list-paragraph" component="p">• Structured Programming</Typography></li>
                                        <li><Typography className="list-paragraph" component="p">• Digital Logic</Typography></li>
                                    </ul>
                            </section>
                            </Grid>
                        </Grid>
                </article>
            </Grid>
        </section>
    );
}