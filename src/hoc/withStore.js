import { applyMiddleware, compose, createStore } from 'redux';

import React from 'react';
import logger from 'redux-logger';
import rootReducer from 'reducers';
import thunk from 'redux-thunk';

const withStore = (Component) => {
	const WithStore = (props) => {
		const initStore = () => {
			const middlewares = [thunk];
			const composeEnhancers =
				window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

			if (process.env.NODE_ENV !== 'production') {
				middlewares.push(logger);
			}

			const store = createStore(
				rootReducer,
				composeEnhancers(applyMiddleware(...middlewares))
			);

			return store;
		};

		return <Component store={initStore()} {...props} />;
	};
	return WithStore;
};

export default withStore;
