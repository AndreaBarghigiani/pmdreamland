import * as React from 'react';
import { FormControl, FormLabel, Switch } from '@chakra-ui/react';

import { useForm } from '../../lib/FormContext';

export default function TaskCompleted() {
	const [state, dispatch] = useForm();

	return (
		<FormControl display={'flex'} alignItems={'center'}>
			<FormLabel htmlFor={'task-completed'} mb={1}>
				Is task completed?
			</FormLabel>
			<Switch
				id={'task-completed'}
				colorScheme={'green'}
				isChecked={state.completed}
				onChange={() => dispatch({ type: 'completed', data: !state.completed })}
			/>
		</FormControl>
	);
}
