import * as React from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
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
 * TODO: must add relation with user in future to let add task to specific list.
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
