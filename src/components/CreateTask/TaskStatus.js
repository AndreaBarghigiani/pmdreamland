import * as React from 'react';

import {
	FormControl,
	FormLabel,
	Select,
	useColorModeValue,
} from '@chakra-ui/react';

import { taskStatus } from '../../utility';
import { useForm } from '../../lib/FormContext';

export default function TaskStatus({ label }) {
	const options = taskStatus;

	const bg = useColorModeValue('white', 'gray.500');
	const [state, dispatch] = useForm();

	return (
		<FormControl id="task-status">
			{label ? <FormLabel fontWeight={600}>{label}</FormLabel> : null}
			{options.length > 0 ? (
				<Select
					bg={bg}
					value={state.status}
					onChange={e => dispatch({ type: 'status', data: e.target.value })}
				>
					{options.length > 0 &&
						options.map(option => (
							<option key={option.value} value={option.value}>
								{option.text}
							</option>
						))}
				</Select>
			) : null}
		</FormControl>
	);
}
