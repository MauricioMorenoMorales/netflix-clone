import { makeStyles } from '@material-ui/core';
import React from 'react';

const Banner = () => {
	const classes = useStyles();
	return (
		<div>
			<h1>Banner</h1>
			<h1>Banner</h1>
		</div>
	);
};

export default Banner;

const useStyles = makeStyles(theme => ({
	root: {},
}));