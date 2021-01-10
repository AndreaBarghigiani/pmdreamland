import * as React from 'react';
import { Button, HStack } from '@chakra-ui/react';

import { addTask } from '../../lib/Store';
import { useForm } from '../../lib/FormContext';

export default function TaskSubmit({showForm}) {
	const [formContent, dispatch ] = useForm();

	const handleSubmit = (e) => {
		console.log(e.target)
		addTask(formContent);
		showForm(false);
	}

	return (
		<HStack spacing={8} justify="space-between" align="center">
			<Button
				type="submit"
				colorScheme="blue"
				onClick={handleSubmit}
			>
				Save
			</Button>
			<Button
				onClick={() => addTask(formContent)}
				variant="ghost"
				colorScheme="blue"
			>
				...or add new task
			</Button>
		</HStack>
	);
}
