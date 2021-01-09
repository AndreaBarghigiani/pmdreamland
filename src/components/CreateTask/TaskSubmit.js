import * as React from 'react';
import { Button, HStack } from '@chakra-ui/react';

import { addTask } from '../../lib/Store';
import { useForm } from '../../lib/FormContext';

export default function TaskSubmit() {
	const [formContent] = useForm();
	console.log('formContent', formContent);
	return (
		<HStack spacing={8} justify="space-between" align="center">
			<Button
				type="submit"
				colorScheme="blue"
				onClick={() => addTask(formContent)}
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
