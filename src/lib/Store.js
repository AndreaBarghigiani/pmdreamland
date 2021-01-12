import * as React from 'react';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	process.env.REACT_APP_SUPABASE_URL,
	process.env.REACT_APP_SUPABASE_KEY
);

export const useStore = props => {
	const [tasks, setTasks] = React.useState([]);

	// Fetching tasks
	React.useEffect(() => {
		fetchTasks().then(res => {
			setTasks(res);
		});
	}, []);

	return tasks;
};

/**
 * Will fetch the list saved in database.
 * TODO: must add relation with user in future.
 * @returns {Object} The tasks list
 */
export const fetchTasks = async () => {
	try {
		let { data, error } = await supabase.from('tasks').select();
		if (error) {
			throw new Error(error);
		}
		return data;
	} catch (error) {
		console.log('error', error);
	}
};

/**
 * Will add a new task the list saved in database.
 * @returns {Object} The tasks list
 */
export const addTask = async task => {
	try {
		let { data, error } = await supabase.from('tasks').insert([task]);
		if (error) {
			throw new Error(error);
		}
		return data;
	} catch (error) {
		console.log('error', error);
	}
};

/**
 * Add a new user in database. Already check if user exists with getPublicUser
 * @returns {Object} The tasks list
 */
export const addUser = async user => {
	try {
		console.log(user);
		const { insData, insError } = await supabase
			.from('users')
			.insert([{ id: user.id, email: user.email }]);

		console.log('insError', insError);
		console.log('insData', insData);
		if (insError) {
			throw new Error(insError);
		}
		return insData;
	} catch (insError) {
		console.log('insError', insError);
	}
};

/**
 * Get the public part of the user that I care about for my app.
 * @param {Object} user The user information that comes from the login 
 */
export const getPublicUser = async user => {
	try {
		const { data, error } = await supabase
			.from('users')
			.select('*')
			.eq('id', user.id)
			.single();

		if (data.length === 0) {
			return addUser(user);
		}

		return data;
	} catch (error) {
		console.log('error in getPublicUser', error);
	}
};
