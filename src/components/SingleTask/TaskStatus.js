import * as React from 'react'

import {
	FormControl,
	FormLabel,
	Select,
	useColorModeValue,
	// useBreakpoint,
} from '@chakra-ui/react';

export default function TaskStatus( {label, value, onTaskChange = () => {} }) {
	const options = [
		{ value: 'tomorrow', text: 'Tomorrow' },
		{ value: 'two-three-days', text: 'Two or three days' },
		{ value: 'less-week', text: 'Less than a week' },
		{ value: 'one-week', text: 'One week' },
		{ value: 'two-weeks', text: 'Two weeks' },
		{ value: 'more', text: 'More...' },
	];

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
