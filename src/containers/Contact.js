import React from "react";
import "./Style.scss";
import "./Contact.scss";

// Core Components
import { TextField, Button } from "@material-ui/core";

export default function Contact()
{
    return (
        <section class="contact-container" id="contact">
            <h2 class="section-header">CONTACT</h2>
            <section class="contact-form-container">
                <TextField required id="name-text-field" label="Name" type="search" fullWidth/>
                <TextField required id="email-text-field" label="Email Address" type="search" fullWidth/>
                <TextField required id="subject-text-field" label="Subject" type="search" fullWidth/>
                <TextField id="message-text-field" label="Message" type="search" fullWidth
                    multiline rows={4} variant="outlined" style={{marginTop: "10px"}} color="inherit"
                />
                {/*
                    TODO: Create a button class for contact,
                    instead of using inline styling.
                */}
                <Button variant="contained" style={{ marginTop: "10px"}}>Send</Button>
            </section>
        </section>
    );
}