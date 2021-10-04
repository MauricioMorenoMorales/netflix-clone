import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Header, Banner } from '../Components';

const Home = () => {
	const classes = useStyles();
	return (
		<div>
			<Header />
			<Banner />
		</div>
	);
};

export default Home;

const useStyles = makeStyles(theme => ({
	root: {},
}));
