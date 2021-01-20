import * as React from 'react'

import {
	FormControl,
	FormLabel,
	Textarea,
	useColorModeValue,
} from '@chakra-ui/react';

import { useForm } from '../../lib/FormContext';

export default function TaskDescription( { label } ) {
	const bg = useColorModeValue('white', 'gray.500');
	const negBg = useColorModeValue('gray.500', 'white');
	const [state, dispatch] = useForm();
	
	return (
		<FormControl>
			{label && state.description !== '' ? (
				<FormLabel fontWeight={600}>{label}</FormLabel>
			) : null}
			<Textarea
				bg={bg}
				placeholder="Task description"
				value={state.description}
				onChange={e => dispatch({ type: 'description', data: e.target.value })}
				_placeholder={{ color: negBg }}
			/>
		</FormControl>
	);

}
