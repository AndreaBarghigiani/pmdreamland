import * as React from 'react';
import { Button } from '@chakra-ui/react';

import { deleteTask } from '../../lib/Store';
import { useForm } from '../../lib/FormContext';

export default function TaskDelete({ task, onClose, updateTasks }) {
	const [, dispatch] = useForm();

	async function handleClick(e) {
		e.preventDefault();
		const deletedTask = await deleteTask(task);
		if (deletedTask) {
			updateTasks(deletedTask[0], { toDelete: true });
		}
		dispatch({ type: 'empty' });
		onClose();
	}
	return (
		<Button
			mr={4}
			colorScheme={'red'}
			onClick={handleClick}
			variant={'outline'}
		>
			Delete
		</Button>
	);
}
