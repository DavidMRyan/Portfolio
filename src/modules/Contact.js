import React from "react";
import "../css/App.scss";

// Core Components
import { TextField, Button } from "@material-ui/core";

// Constant Variables
const divHeight = "75vh";

export default function Contact()
{
    return (
        <section id="contact" style={{height: divHeight}}>
            <h1 class="body-heading-light" style={{textAlign: "center"}}>CONTACT</h1>
            <div style={{paddingLeft: "15%", paddingRight: "15%", marginTop: "-25px"}}>
                <TextField required id="name-text-field" label="Name" type="search" fullWidth/>
                <TextField required id="email-text-field" label="Email Address" type="search" fullWidth/>
                <TextField required id="subject-text-field" label="Subject" type="search" fullWidth/>
                <TextField id="message-text-field" label="Message" type="search" fullWidth
                    multiline rows={4} variant="outlined" style={{marginTop: "10px"}} color="inherit"
                />
                <Button variant="contained" style={{ marginTop: "10px"}}>Send</Button>
            </div>
        </section>
    );
}