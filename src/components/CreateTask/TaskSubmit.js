import * as React from 'react';
import { Button, HStack } from '@chakra-ui/react';

import { addTask, updateTask } from '../../lib/Store';
import { useForm } from '../../lib/FormContext';

export default function TaskSubmit({ onClose, fill = null }) {
	const [formContent, dispatch] = useForm();

	const handleSubmit = e => {
		if( fill ){
			updateTask(formContent);
		} else {
			addTask(formContent);
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
