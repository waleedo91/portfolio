import React, { Fragment } from 'react';
import { Navigation } from './components/layout/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Landing } from './components/layout/Landing';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Certify } from './components/Certify/Certify';
import './App.css';

const App = () => {
	return (
		<Router>
			<Fragment>
				<Navigation />
				<Route exact path='/' component={Landing} />
				<section className='container'>
					<Switch>
						<Route exact path='/about' component={About} />
						<Route exact path='/contact' component={Contact} />
						<Route exact path='/certify' component={Certify} />
					</Switch>
				</section>
			</Fragment>
		</Router>
	);
};
export default App;
