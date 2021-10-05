import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import {
	NetflixButton,
	NetflixInput,
} from '../styledComponents/styledComponents';

const Signup = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Typography variant="h5" align="left">
				Sign In
			</Typography>
			<form className={classes.form}>
				<NetflixInput />
				<NetflixInput />
				<NetflixButton wide="medium" radius>
					Sign In
				</NetflixButton>
			</form>
		</div>
	);
};

export default Signup;

const useStyles = makeStyles(theme => ({
	root: {},
}));
