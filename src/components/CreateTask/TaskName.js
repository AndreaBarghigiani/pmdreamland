import * as React from 'react';

import {
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	useColorModeValue,
} from '@chakra-ui/react';

import { CheckIcon } from '@chakra-ui/icons';
import { useForm } from '../../lib/FormContext';
import { useUser } from '../../lib/UserContext';

export default function TaskName({ withIcon = true, fill, label }) {
	const bg = useColorModeValue('white', 'gray.500');
	const negBg = useColorModeValue('gray.500', 'white');
	const [state, dispatch] = useForm();
	const [users] = useUser();

	React.useEffect(() => {
		dispatch({ type: 'user_id', data: users.id });
	}, [users, dispatch]);

	React.useEffect(() => {
		dispatch({ type: 'update', data: new Date().toISOString() });
	}, [dispatch]);
	
	React.useEffect(() => {
		dispatch({ type: 'fill', data: fill });
	}, [fill, dispatch]);

	return (
		<FormControl id="task-name">
			{label ? <FormLabel fontWeight={600}>{label}</FormLabel> : null}
			<InputGroup>
				{withIcon ? <InputLeftElement children={<CheckIcon />} /> : null}
				<Input
					bg={bg}
					placeholder="Task name"
					name="name"
					value={state.name}
					onChange={e => dispatch({ type: 'name', data: e.target.value })}
					_placeholder={{ color: negBg }}
				/>
			</InputGroup>
		</FormControl>
	);
}
