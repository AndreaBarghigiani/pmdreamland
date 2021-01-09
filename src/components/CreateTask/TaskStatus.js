import * as React from 'react'

import {
	FormControl,
	FormLabel,
	Select,
	useColorModeValue,
} from '@chakra-ui/react';

import { taskStatuses } from '../../utility';
import { useForm } from '../../lib/FormContext';

export default function TaskStatus( { label }) {
	const options = taskStatuses;

	const bg = useColorModeValue('white', 'gray.500');
	const [state, dispatch] = useForm();
	

	return (
		<FormControl id="task-status">
			{ label && <FormLabel>{ label }</FormLabel> }
			{ options.length > 0 ?
				<Select 
					bg={bg} 
					placeholder='Task Status' 
					value={state.status}
					onChange={(e) => dispatch({type: 'status', data: e.target.value})}
				>
					{ options.length > 0 &&
						options.map( option => (
							<option key={ option.value } value={ option.value }>
								{ option.text }
							</option>
						) ) }
				</Select>
			: null }
		</FormControl>
	);
}
