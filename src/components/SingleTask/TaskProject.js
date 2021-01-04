import * as React from 'react';

import {
	FormControl,
	Input,
	InputGroup,
	InputLeftElement,
	useColorModeValue,
} from '@chakra-ui/react';

import { ExternalLinkIcon } from '@chakra-ui/icons';

export default function TaskProject( {
	withIcon = true,
	value,
	onTaskChange = () => {},
} ) {
	const bg = useColorModeValue('white', 'gray.500');
	const handleChange = e => {
		onTaskChange( { taskProject: e.target.value } );
	};

	return (
		<FormControl id="task-project">
			<InputGroup>
				{ withIcon && (
					<InputLeftElement children={ <ExternalLinkIcon /> } />
				) }
				<Input
					bg={bg}
					placeholder="Task Project"
					value={ value }
					onChange={ handleChange }
				/>
			</InputGroup>
		</FormControl>
	);
}
