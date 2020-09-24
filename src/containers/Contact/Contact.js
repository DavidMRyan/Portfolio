import React from "react";
import {
    TextField,
    Button,
    Typography
} from "@material-ui/core";

import "../Style.scss";
import "./Contact.scss";

export default function Contact()
{
    return (
        <section class="container contact" id="contact">
            <Typography class="container-header" component="h2">CONTACT</Typography>
            <section class="contact-form-container">
                <TextField required id="name-text-field" label="Name" type="search" fullWidth/>
                <TextField required id="email-text-field" label="Email Address" type="search" fullWidth/>
                <TextField required id="subject-text-field" label="Subject" type="search" fullWidth/>
                <TextField id="message-text-field" label="Message" type="search" fullWidth
                    multiline rows={4} variant="outlined" style={{marginTop: "10px"}} color="inherit"
                />
                {/*
                    TODO: Use the 'contact-send-button' class
                    See 'Footer.js' for more information.
                */}
                <Button variant="contained" style={{marginTop: 10 + "px"}}>Send</Button>
            </section>
        </section>
    );
}