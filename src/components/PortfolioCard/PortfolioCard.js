import React from "react";
import PropTypes from "prop-types";
import {
    Typography,
    IconButton,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Collapse,
    CardActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InfoIcon from "@material-ui/icons/Info";
import clsx from "clsx";

import "../../containers/Style.scss";

const useStyles = makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
  }));

/**
 * Portfolio card with some react props to make this component modular.
 * @param {*} props - List of Attributes to pass
 */
export default function PortfolioCard(props)
{
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card>
            <CardHeader title={props.title} subheader={props.date} />
            <CardMedia className={classes.media} image={props.image} title={props.imageTitle}/>
            <CardContent>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                >
                    <ExpandMoreIcon />
                </IconButton>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Typography variant="body2" color="inherit" component="p">
                        {props.children}
                    </Typography> 
                </Collapse>
            </CardContent>
            <CardActions>
                <IconButton className="portfolio-repo-icon" href={props.repository} target="_blank">
                    <InfoIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

PortfolioCard.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    repository: PropTypes.string.isRequired,
    imageTitle: PropTypes.string
}