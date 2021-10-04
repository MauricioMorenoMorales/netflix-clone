import {
	AppBar,
	Avatar,
	IconButton,
	makeStyles,
	Toolbar,
} from '@material-ui/core';
import logo from '../images/netflix-logo-alt.png';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const Header = () => {
	const [transparency, setTransparency] = useState(false);
	const history = useHistory();

	const hideHeader = event =>
		window.scrollY > 100 ? setTransparency(true) : setTransparency(false);

	useEffect(() => {
		document.addEventListener('scroll', hideHeader);
		return () => document.removeEventListener('scroll', hideHeader);
	}, []);

	const classes = useStyles();

	return (
		<AppBar
			position="sticky"
			className={`${classes.root} ${transparency && classes.transparent}`}
			elevation={0}
		>
			<Toolbar className={classes.toolbar}>
				<IconButton onClick={event => history.push('/')}>
					<img src={logo} alt="logo" className={classes.logo} />
				</IconButton>
				<Avatar
					variant="square"
					style={{ cursor: 'pointer' }}
					className={classes.borderRadius}
					onClick={event => history.push('/')}
				/>
			</Toolbar>
		</AppBar>
	);
};

export default Header;

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: '#111',
		top: 0,
		left: 0,
		right: 0,
		transition: '.5s',
	},
	transparent: {
		backgroundColor: 'transparent',
	},
	logo: {
		height: '40px',
		cursor: 'pointer',
		margin: '20px',
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	borderRadius: {
		borderRadius: '3px',
	},
}));
