import { makeStyles } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login, Profile, Checkout, Home } from './Pages';

function App() {
	const user = true;
	const classes = useStyles();
	return (
		<div class={classes.root}>
			<Router>
				{!user ? (
					<Login />
				) : (
					<Switch>
						<Route path="/profile" component={Profile} />
						<Route path="/checkout" component={Checkout} />
						<Route path="/" component={Home} />
					</Switch>
				)}
			</Router>
		</div>
	);
}

export default App;

const useStyles = makeStyles(theme => ({
	root: {
		minHeight: '100vh',
		backgroundColor: '#fff',
	},
}));
