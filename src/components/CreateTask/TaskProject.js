import * as React from 'react';

import {
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	useColorModeValue,
} from '@chakra-ui/react';

import { ViewIcon } from '@chakra-ui/icons';
import { useForm } from '../../lib/FormContext';

export default function TaskProject( {
	withIcon = true,
	label
} ) {
	const bg = useColorModeValue('white', 'gray.500');
	const negBg = useColorModeValue('gray.500', 'white');
	const [state, dispatch] = useForm();

	return (
		<FormControl id="task-project">
			{label ? <FormLabel fontWeight={600}>{label}</FormLabel> : null}
			<InputGroup>
				{withIcon && <InputLeftElement children={<ViewIcon />} />}
				<Input
					bg={bg}
					placeholder="Task Project"
					name="project"
					value={state.project}
					onChange={e => dispatch({ type: 'project', data: e.target.value })}
					_placeholder={{ color: negBg }}
				/>
			</InputGroup>
		</FormControl>
	);
}
