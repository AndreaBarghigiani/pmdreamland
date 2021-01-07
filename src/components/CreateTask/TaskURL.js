import * as React from 'react';

import {
	FormControl,
	Input,
	InputGroup,
	InputLeftElement,
	useColorModeValue
} from '@chakra-ui/react';

import { LinkIcon } from '@chakra-ui/icons';

export default function TaskURL( {
	withIcon = true,
	value,
	onTaskChange = () => {},
} ) {
	const bg = useColorModeValue('white', 'gray.500');
	const handleChange = e => {
		onTaskChange( { taskURL: e.target.value } );
	};

	return (
		<FormControl id="task-url">
			<InputGroup>
				{ withIcon ? (
					<InputLeftElement children={ <LinkIcon /> } />
				) : null }
				<Input
					bg={bg}
					placeholder="Task URL"
					type="url"
					value={ value }
					onChange={ handleChange }
				/>
			</InputGroup>
		</FormControl>
	);
}
