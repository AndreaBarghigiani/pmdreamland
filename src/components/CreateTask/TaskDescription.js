import * as React from 'react'

import {
	FormControl,
	FormLabel,
	Textarea,
	useColorModeValue,
} from '@chakra-ui/react';

export default function TaskDescription( { label, value, onTaskChange = () => {} } ) {
	const bg = useColorModeValue('white', 'gray.500');
	const handleChange = e => {
		onTaskChange( { taskDescription: e.target.value } );
	};
	return (
		<FormControl>
			{ label && <FormLabel>{ label }</FormLabel> }
			<Textarea
				bg={bg}
				placeholder='Task description'
				value={ value }
				onChange={ handleChange }
			/>
		</FormControl>
	);

}
