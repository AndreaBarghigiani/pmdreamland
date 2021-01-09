import * as React from 'react';

import {
	FormControl,
	Input,
	InputGroup,
	InputLeftElement,
	useColorModeValue,
} from '@chakra-ui/react';

import { ExternalLinkIcon } from '@chakra-ui/icons';
import { useForm } from '../../lib/FormContext';

export default function TaskProject( {
	withIcon = true,
} ) {
	const bg = useColorModeValue('white', 'gray.500');
	const negBg = useColorModeValue('gray.500', 'white');
	const [state, dispatch] = useForm();

	return (
		<FormControl id="task-project">
			<InputGroup>
				{ withIcon && (
					<InputLeftElement children={ <ExternalLinkIcon /> } />
				) }
				<Input
					bg={bg}
					placeholder="Task Project"
					name='project'
					value={state.project}
					onChange={(e) => dispatch({type: 'project', data: e.target.value})}
					_placeholder={{ color: negBg }}
				/>
			</InputGroup>
		</FormControl>
	);
}
