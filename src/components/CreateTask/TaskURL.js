import * as React from 'react';

import {
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	useColorModeValue
} from '@chakra-ui/react';

import { LinkIcon } from '@chakra-ui/icons';
import { useForm } from '../../lib/FormContext';

export default function TaskURL( {
	withIcon = true,
	label
} ) {
	const bg = useColorModeValue('white', 'gray.500');
	const [state, dispatch] = useForm();

	return (
		<FormControl id="task-url">
			{ label && state.url !== '' ? <FormLabel fontWeight={600}>{label}</FormLabel> : null}
			<InputGroup>
				{ withIcon ? (
					<InputLeftElement children={ <LinkIcon /> } />
				) : null }
				<Input
					bg={bg}
					placeholder="Task URL"
					type="url"
					value={ state.url }
					onChange={(e) => dispatch({type: 'url', data: e.target.value})}
				/>
			</InputGroup>
		</FormControl>
	);
}
