import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import HeroBanner from '../images/netflix-banner.jpeg';

const Banner = () => {
	const classes = useStyles();
	const truncate = (text, size) =>
		text?.length > size ? text.substring(0, size - 1) + '...' : text;
	return (
		<div className={classes.root}>
			<div className={classes.content}>
				<Typography variant="h2" component="h1">
					Movie Title
				</Typography>
				<div className={classes.buttons}>
					<Button>Play</Button>
					<Button>My List</Button>
				</div>
				<Typography
					style={{ wordWrap: 'break-word' }}
					className={classes.description}
					variant="h6"
				>
					{truncate(
						'Aqui vas introduciendo tu texto largo sin ningún problema',
						80,
					)}
				</Typography>
				<div className={classes.fadeBottom}></div>
			</div>
		</div>
	);
};

export default Banner;

const useStyles = makeStyles(theme => ({
	root: {
		backgroundImage: `url(${HeroBanner})`,
		position: 'relative',
		height: '540px',
		backgroundRepeat: 'no-repeat',
		objectFit: 'contain',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		color: '#fff',
	},
	buttons: {
		'& button': {
			cursor: 'pointer',
			color: '#fff',
			fontWeight: 700,
			borderRadius: '5px',
			padding: theme.spacing(1, 4, 1, 4),
			marginRight: '1rem',
			backgroundColor: 'rgba(51,51,51,0.5)',
			'&:hover': {
				backgroundColor: '#e6e6e6',
				color: '#000',
			},
		},
	},
	fadeBottom: {
		position: 'absolute',
		top: '30vh',
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 99,
		backgroundImage:
			'linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111)',
	},
}));
