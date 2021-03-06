import * as React from 'react';
import { Button } from '@chakra-ui/react';

import { addTask, updateTask } from '../../lib/Store';
import { useForm } from '../../lib/FormContext';

export default function TaskSubmit({ onClose, fill = null, updateTasks }) {
	const [formContent, dispatch] = useForm();

	async function handleSubmit(e) {
		e.preventDefault();

		if (fill) {
			delete formContent?.prevProgress;
			formContent.edited_at = new Date().toISOString();
			const updateState = await updateTask(formContent);
			if (updateState) {
				updateTasks(updateState[0]);
			}
			
		} else {
			const addedTask = await addTask(formContent);
			if (addedTask) {
				updateTasks(addedTask[0], { isNew: true });
			}
		}
		dispatch({ type: 'empty' });
		onClose();
	};

	return (
		<Button type="submit" colorScheme="green" onClick={handleSubmit}>
			Save
		</Button>
	);
}
