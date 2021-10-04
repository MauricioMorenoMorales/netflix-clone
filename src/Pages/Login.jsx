import React from 'react';
import { makeStyles } from '@material-ui/styles';
import logo from '../images/netflix-logo-alt.png';
import HeroBanner from '../images/Netflix-hero.png';
import { Button, Typography } from '@material-ui/core';
import {
	NetflixButton,
	NetflixInput,
} from '../styledComponents/styledComponents';

const Login = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<img src={logo} className={classes.logo} alt="Netflix Logo" />
			<NetflixButton className={classes.session}>Iniciar Sesión</NetflixButton>
			<div className={classes.info}>
				<Typography variant="h4" gutterBottom>
					Unlimited films, TV programmes and more.
				</Typography>
				<Typography variant="h5">Watch anywhere. Cancel at any time</Typography>
				<Typography variant="h5">
					Ready to watch ? Enter your email to create or restart your
					membesrship
				</Typography>
				<div className={classes.InputBlock}>
					<NetflixInput placeholder="Email Address" />
					<NetflixButton>GET STARTED</NetflixButton>
				</div>
			</div>
		</div>
	);
};

export default Login;

const useStyles = makeStyles(theme => ({
	root: {
		position: 'relative',
		height: '100vh',
		backgroundImage: `url(${HeroBanner})`,
		objectFit: 'contain',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		position: 'fixed',
		top: 20,
		left: 40,
		width: '150px',
		cursor: 'pointer',
	},
	session: {
		position: 'fixed',
		top: 20,
		right: 20,
		zIndex: 15,
	},
	info: {
		color: '#fff',
		zIndex: 15,
		textAlign: 'center',
		'& h4': {
			fontWeigth: 800,
		},
		'& h5': {
			fontWeigth: 400,
			marginTop: 0,
		},
	},
}));
