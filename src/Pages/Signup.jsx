import React, { useState } from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import {
	NetflixButton,
	NetflixInput,
} from '../styledComponents/styledComponents';


const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const classes = useStyles();

	const register = event => {
		event.preventDefault();
	};
	const signIn = event => {
		event.preventDefault();
		auth.createUserWithEmailPassword(email, password)
		.then()
		.catch()
	};

	return (
		<div className={classes.root}>
			<Typography variant="h5" align="left">
				Sign In
			</Typography>
			<form className={classes.form}>
				<NetflixInput
					value={email}
					onChange={event => setEmail(event.target.value)}
					placeholder="Email"
					className={classes.email}
				/>
				<NetflixInput
					value={password}
					onChange={event => setPassword(event.target.value)}
					placeholder="Password"
					className={classes.password}
				/>
				<NetflixButton wide="medium" radius type="submit" onClick={signIn}>
					Sign In
				</NetflixButton>
				<Typography variant="subtitle2" className={classes.subtitle}>
					New to Netflix ?{' '}
					<span onClick={register} className={classes.signupLink}>
						Sign Up now.{' '}
					</span>
				</Typography>
			</form>
		</div>
	);
};

export default Signup;

const useStyles = makeStyles(theme => ({
	root: {
		maxWidth: '350px',
		width: '20rem',
		height: '25rem',
		background: 'rgba(0,0,0,0.65)',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	form: {
		width: '80%',
	},
	email: {
		marginBottom: theme.spacing(2),
	},
	password: {
		marginBottom: theme.spacing(2),
	},
	subtitle: {
		marginTop: theme.spacing(2),
	},
	signupLink: {
		cursor: 'pointer',
		color: 'red',
		'&:hover': {
			textDecoration: 'underline',
		},
	},
}));
