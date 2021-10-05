import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Header, Plans } from '../Components';
import Avatar from '../images/Avatar.jpg';
import { NetflixButton } from '../styledComponents/styledComponents';

const Profile = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Header />
			<Typography variant="h3">Edit Profile</Typography>
			<div className={classes.info}>
				<img src={Avatar} alt="Avatar" />
				<div className={classes.details}>
					<div className={classes.plans}>
						<Typography variant="h6">email usuario</Typography>
						<Typography variant="h5" gutterBottom>
							Plans
						</Typography>
						<Plans cost={7.99}>Netflix Standard</Plans>
						<Plans cost={11.99}>Netflix Basic</Plans>
						<Plans cost={15.99}>Netflix Premium</Plans>
						<NetflixButton>Sign Out</NetflixButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;

const useStyles = makeStyles(theme => ({
	root: {
		color: '#fff',
		backgroundColor: '#111',
		minHeight: '100vh',
		width: '100vw',
		maxWidth: '800px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	info: {
		width: '80%',
		display: 'flex',
		'& img': {
			width: '100px',
			height: '100px',
			[theme.breakpoints.down('xs')]: {
				display: 'none',
			},
		},
	},
	details: {
		width: '100%',
		marginLeft: theme.spacing(3),
	},
}));
