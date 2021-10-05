import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { NetflixButton } from '../styledComponents/styledComponents';

const Plans = ({ cost, children }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Typography variant="h5">{children}</Typography>
			<NetflixButton>Suscribe</NetflixButton>
		</div>
	);
};

export default Plans;

const useStyles = makeStyles(theme => ({
	root: {},
}));
