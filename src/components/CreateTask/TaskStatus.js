import * as React from 'react'

import {
	FormControl,
	FormLabel,
	Select,
	useColorModeValue,
	// useBreakpoint,
} from '@chakra-ui/react';

import { taskStatuses } from '../../sampleData'
export default function TaskStatus( {label, value, onTaskChange = () => {} }) {
	const options = taskStatuses;

	const bg = useColorModeValue('white', 'gray.500');
	const handleChange = e => {
		onTaskChange( { taskStatus: e.target.value } );
	};

	return (
		<FormControl id="task-status">
			{ label && <FormLabel>{ label }</FormLabel> }
			{ options.length > 0 ?
				<Select 
					bg={bg} 
					placeholder='Task Status' 
					value={ value }
					onChange={ handleChange }
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
