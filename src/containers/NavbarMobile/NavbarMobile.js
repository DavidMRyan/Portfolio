import "./NavbarMobile.scss";
import "../../App.scss"
import "../../Responsive.scss"

import {
    AppBar,
    Toolbar,
    Typography,
    Menu,
    IconButton,
} from "@material-ui/core";

const options = [
    "Home",
    "About Me",
    "Experience",
    "Education",
    "Portfolio",
    "Contact"
];

export default function NavbarMobile()
{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => { setAnchorEl(event.CurrentTarget) }
    const handleClose = () => { setAnchorEl(null) }

    return (
        <AppBar color="default">
            <Toolbar>
                    <Typography className="navbar-mobile" type="title" color="inherit" />
                    <IconButton aria-label="theme" color="inherit" onClick={handleClick}>
                        <MenuButtonIcon />
                    </IconButton>
                    <Menu
                        id="navbar-mobile-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                    >
                        {options.map((option) => (
                            <MenuItem key={option} selected={option === "Home"} onClick={handleClose}>
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
            </Toolbar>
        </AppBar>
    );
}