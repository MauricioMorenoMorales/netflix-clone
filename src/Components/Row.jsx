import { makeStyles } from '@material-ui/styles';
import React from 'react';

const Row = () => {
	const classes = useStyles();
	return (
		<div>
			<h1>Plans</h1>
		</div>
	);
};

export default Row;

const useStyles = makeStyles(theme => ({
	root: {},
}));
