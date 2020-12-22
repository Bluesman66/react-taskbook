import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { withStore } from 'hoc';

const App = ({ store }) => {
	return (
		<Provider store={store}>
			<Router>
				<div>App</div>
			</Router>
		</Provider>
	);
};

export default withStore(App);
