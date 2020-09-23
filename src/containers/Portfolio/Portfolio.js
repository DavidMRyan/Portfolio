import React from "react";
import "../Style.scss";
import "./Portfolio.scss"
import {
    Grid,
    Typography,
    IconButton,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";

export default function Portfolio()
{
    return (
        <section class="container portfolio" id="portfolio">
            <h2 class="container-header">PORTFOLIO</h2>
            {/*
                TODO: Use the 'portfolio-grid-container" class in 'Portfolio.scss'
                Read 'Footer.js' for more information on why this doesn't work.
            */}
            <Grid container spacing={3} style={{paddingLeft: "5%", paddingRight: "5%"}}>
                <Grid item xs>
                    <Card>
                        <CardHeader title="Test Card Header Title" subheader="September 17, 2020">
                            <CardMedia className="media" image={""} title="Test Media Title"/>
                        </CardHeader>
                        <CardContent>
                            <Typography variant="body2" color="inherit" component="p">
                                This is a test typograhpy that will act as the body
                                text of the card content. This text is a typography
                                component and is a being used in a good way to test
                                if this text will work or not for the card content body.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card>
                        <CardHeader title="Test Card Header Title" subheader="September 17, 2020">
                            <CardMedia className="media" image={""} title="Test Media Title"/>
                        </CardHeader>
                        <CardContent>
                            <Typography variant="body2" color="inherit" component="p">
                                This is a test typograhpy that will act as the body
                                text of the card content. This text is a typography
                                component and is a being used in a good way to test
                                if this text will work or not for the card content body.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card>
                        <CardHeader title="Test Card Header Title" subheader="September 17, 2020">
                            <CardMedia className="media" image={""} title="Test Media Title"/>
                        </CardHeader>
                        <CardContent>
                            <Typography variant="body2" color="inherit" component="p">
                                This is a test typograhpy that will act as the body
                                text of the card content. This text is a typography
                                component and is a being used in a good way to test
                                if this text will work or not for the card content body.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card>
                        <CardHeader title="Test Card Header Title" subheader="September 17, 2020">
                            <CardMedia className="media" image={""} title="Test Media Title"/>
                        </CardHeader>
                        <CardContent>
                            <Typography variant="body2" color="inherit" component="p">
                                This is a test typograhpy that will act as the body
                                text of the card content. This text is a typography
                                component and is a being used in a good way to test
                                if this text will work or not for the card content body.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </section>
    );
}