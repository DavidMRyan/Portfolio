import React from "react";
import {
    TextField,
    Button,
    Typography
} from "@material-ui/core";
import axios from "axios";

import "../Style.scss";
import "./Contact.scss";
import Snackbar from "../../components/Snackbar/Snackbar";

const initialState = {
    from: "",
    email: "",
    subject: "",
    text: "",
    success: undefined
};

const Contact = () =>
{
    const [state, setState] = React.useState(initialState);
     
    const onInputChange = (event) =>
    {
        event.persist();
        setState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value,
            success: false,
        }));
    }

    /**
     * Sends an HTTP POST request to the '/email' route for parsing later.
     */
    const sendEmailPOSTRequest = async (event) =>
    {
        event.preventDefault();
        try
        {
            const response = await axios.post("/email", {
                from: state.from,
                email: state.email,
                subject: state.subject,
                text: state.text
            });

            setState({
                ...initialState,
                success: response.data.success
            });
        }
        catch (error) { console.log(error); }
    }

    return (
        <section className="contact" id="contact">
            <Typography className="contact-header" component="h2">CONTACT</Typography>
            <form className="contact-form-container" onSubmit={sendEmailPOSTRequest}>
                <TextField required id="name-text-field" name="from" label="Name" type="search" fullWidth onChange={onInputChange} value={state.from}/>
                <TextField required id="email-text-field" name="email" label="Email Address" type="search" fullWidth onChange={onInputChange} value={state.email}/>
                <TextField required id="subject-text-field" name="subject" label="Subject" type="search" fullWidth onChange={onInputChange} value={state.subject}/>
                <TextField id="message-text-field" name="text" label="Message" type="search" fullWidth
                    multiline rows={4} variant="outlined" style={{marginTop: "10px"}} onChange={onInputChange} value={state.text}
                />
                <Button className="contact-send-button" variant="contained" type="submit">Send</Button>
                <Snackbar open={state.success ?? false} severity={state.success ? "success" : "error"}
                    message={state.success ? "Email was Successfully Sent!" : "There was an error sending the email!"}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                />
            </form>
        </section>
    );
}

export default Contact;