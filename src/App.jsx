import { makeStyles } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login, Profile, Checkout, Home } from './Pages';

function App() {
	const user = null;
	const classes = useStyles();
	return (
		<div class={'component.classes'}>
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
		backgroundColor: '#111',
		minHeight: '100vh',
	},
}));
