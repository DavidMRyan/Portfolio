import React, { useEffect, useState } from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert  from "@material-ui/lab/Alert";

import { makeStyles } from "@material-ui/core/styles";

function Alert(props)
{
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		"& > * + *": {
			marginTop: theme.spacing(2)
		}
	}
}));

export default function CustomizedSnackbars(props)
{
	const classes = useStyles();
	const [open, setOpen] = useState(props.open);

	useEffect(() => setOpen(props.open), [props.open]);

	const handleClose = (event, reason) => 
	{
		if (reason === "clickaway")
			return;
		setOpen(false);
	};
	
	return (
		<div className={classes.root}>
			<Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={props.anchorOrigin}>
				<Alert onClose={handleClose} severity={props.severity}>
					{props.message}
				</Alert>
			</Snackbar>
		</div>
	);
}
