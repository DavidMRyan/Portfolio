import React from "react";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import MenuButtonIcon from "@material-ui/icons/Menu";
import {
    AppBar,
    Toolbar,
    Button,
    Menu, withStyles
} from "@material-ui/core";
import Utility from "../../utility";
import { useMediaQuery } from "react-responsive";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import "./Navbar.scss";

export const NavbarMenu = withStyles({
    paper: {
        position: "absolute",
        backgroundColor: "#f5f5f5",
        width: "100%",
        padding: 0,
        margin: 0,
        left: 0,
        right: 0
    },
})((props) => (
    <Menu elevation={0} getContentAnchorEl={null} className={"navbar-paper"}
          anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
          transformOrigin={{vertical: 'top', horizontal: 'center'}}
          {...props}
    />
));

/**
 * @TODO: Remove the ripple effect when the buttons are clicked (especially the menu button)
 * @returns {JSX.Element}
 * @constructor
 */
export const Navbar = () =>
{
    const isPortrait = useMediaQuery({ orientation: "portrait" });
    const isTabletOrMobileDevice = useMediaQuery({ query: "(max-device-width: 1224px)" });
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) =>
    {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () =>
    {
        setAnchorEl(null);
    };

    const onLinkClick = (scrollTo) =>
    {
        Utility.scrollToElement(scrollTo);
        handleClose();
    };

    const links = (
        <>
            <Button onClick={() => onLinkClick("home")}>Home</Button>
            <Button onClick={() => onLinkClick("about-me")}>About Me</Button>
            <Button onClick={() => onLinkClick("experience")}>Experience</Button>
            <Button onClick={() => onLinkClick("education")}>Education</Button>
            <Button onClick={() => onLinkClick("portfolio")}>Portfolio</Button>
            <Button onClick={() => onLinkClick("contact")}>Contact</Button>
        </>
    );

    const mobileNavbar = (
        <Grid container direction="row" justify="flex-end" alignItems="center">
            <IconButton onClick={handleClick} aria-label="theme" color="inherit">
                <MenuButtonIcon />
            </IconButton>
            <section>
                <NavbarMenu id="customized-menu" anchorEl={anchorEl}
                      keepMounted open={Boolean(anchorEl)}
                      onClose={handleClose}>
                    <Grid container direction={"column"} justify={"center"} alignItems={"center"}>
                        {links}
                    </Grid>
                </NavbarMenu>
            </section>
        </Grid>
    );

    const desktopNavbar = (
        <Grid container direction="row" justify="flex-end" alignItems="center">
            {links}
        </Grid>
    );

    return (
        <AppBar className="navbar" color="default" component="nav">
            <Toolbar>
                {isTabletOrMobileDevice || isPortrait ? mobileNavbar : desktopNavbar}
                <IconButton aria-label="theme" color="inherit" hidden>
                    <InvertColorsIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;