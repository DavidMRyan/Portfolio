import React from "react";
import "./Style.scss";
import "./Portfolio.scss"

// Core Components
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

// Icon Components
import ShareIcon from "@material-ui/icons/Share";

export default function Portfolio()
{
    return (
        <section class="portfolio-container" id="portfolio">
            <h2 class="section-header">PORTFOLIO</h2>
            <Grid class="portfolio-grid-container" container spacing={3}>
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