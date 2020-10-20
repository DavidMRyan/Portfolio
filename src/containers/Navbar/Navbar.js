import React from "react";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import MenuButtonIcon from "@material-ui/icons/Menu";
import {
    AppBar,
    Toolbar,
    Button,
    Menu,
    createMuiTheme,
    ThemeProvider
} from "@material-ui/core";
import Utility from "../../utility";
import { useMediaQuery } from "react-responsive";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import "./Navbar.scss";

const menuTheme = createMuiTheme({
    overrides: {
        MuiMenu: {
            paper: {
                backgroundColor: "#f5f5f5",
                position: "absolute",
                top: "56px !important",
                left: "0 !important",
                width: "100%",
                maxWidth: "100%",
                borderRadius: 0
            }
        }
    }
});

/**
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
            <Button onClick={() => onLinkClick("home")} disableRipple>Home</Button>
            <Button onClick={() => onLinkClick("about-me")} disableRipple>About Me</Button>
            <Button onClick={() => onLinkClick("experience")} disableRipple>Experience</Button>
            <Button onClick={() => onLinkClick("education")} disableRipple>Education</Button>
            <Button onClick={() => onLinkClick("portfolio")} disableRipple>Portfolio</Button>
            <Button onClick={() => onLinkClick("contact")} disableRipple>Contact</Button>
        </>
    );

    const mobileNavbar = (
        <Grid container direction="row" justify="flex-end" alignItems="center">
            <IconButton onClick={handleClick} aria-label="theme" color="inherit" disableRipple>
                <MenuButtonIcon />
            </IconButton>
            <section>
                <ThemeProvider theme={menuTheme}>
                    <Menu id="customized-menu" disableScrollLock className={"navbar-paper"} anchorEl={anchorEl}
                          keepMounted open={Boolean(anchorEl)}
                          onClose={handleClose}>
                        <Grid container direction={"column"} justify={"center"} alignItems={"center"}>
                            {links}
                        </Grid>
                    </Menu>
                </ThemeProvider>
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
                <IconButton aria-label="theme" color="inherit">
                    <InvertColorsIcon />
                </IconButton>
                {isTabletOrMobileDevice || isPortrait ? mobileNavbar : desktopNavbar}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;