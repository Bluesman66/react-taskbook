import { FETCH_TASKS_SUCCESS } from 'types';
import { combineReducers } from 'redux';

const initTasks = () => {
	const all = (state = [], action) => {
		switch (action.type) {
			case FETCH_TASKS_SUCCESS:
				return action.tasks;
			default:
				return state;
		}
	};

	return combineReducers({ all });
};

const tasks = initTasks();

export default tasks;
