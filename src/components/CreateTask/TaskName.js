import * as React from 'react';

import {
	FormControl,
	Input,
	InputGroup,
	InputLeftElement,
	useColorModeValue,
} from '@chakra-ui/react';

import { CheckIcon } from '@chakra-ui/icons';

export default function TaskName( {
	withIcon = true,
	value,
	onTaskChange = () => {},
} ) {
	const bg = useColorModeValue('white', 'gray.500');
	const negBg = useColorModeValue('gray.500', 'white');

	const handleChange = e => {
		onTaskChange( { taskName: e.target.value } );
	};

	return (
		<FormControl id="task-name">
			<InputGroup>
				{ withIcon ? (
					<InputLeftElement children={ <CheckIcon /> } />
				) : null }
				<Input
					bg={bg}
					placeholder="Task name"
					value={ value }
					onChange={ handleChange }
					_placeholder={{color: negBg}}
				/>
			</InputGroup>
		</FormControl>
	);
}
