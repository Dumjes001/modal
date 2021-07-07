import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Grid } from '@material-ui/core';
//import { createMuiTheme } from '@material-ui/core'
import '@fontsource/roboto';
import { Typography } from '@material-ui/core';

//in-line styling for the page
//const theme = createMuiTheme();
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		backgroundColor: '#000000',
		borderRadius: '10px',
	},
	
	textColors: {
		color: 'white',
	},
}));

//functional Modal Component
const Modal = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid>
				<CardHeader>
					<Typography className={classes.textColors} variant="h6" >Advanced Settings</Typography>
				</CardHeader>
			</Grid>
		</div>
	);
};

export default Modal;