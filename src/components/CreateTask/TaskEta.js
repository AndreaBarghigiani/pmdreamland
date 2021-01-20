import * as React from 'react';

import {
	FormControl,
	FormLabel,
	Select,
	useColorModeValue,
} from '@chakra-ui/react';

import { taskEta } from '../../utility';
import { useForm } from '../../lib/FormContext';

export default function TaskEta({ label }) {
	const options = taskEta;

	const bg = useColorModeValue('white', 'gray.500');
	const [state, dispatch] = useForm();

	return (
		<FormControl id="task-eta">
			{label ? <FormLabel fontWeight={600}>{label}</FormLabel> : null}
			{options.length > 0 ? (
				<Select
					bg={bg}
					placeholder="Task ETA"
					value={state.eta}
					onChange={e => dispatch({ type: 'eta', data: e.target.value })}
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
