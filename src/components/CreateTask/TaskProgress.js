import * as React from 'react'

import {
	FormControl,
	FormHelperText,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
} from '@chakra-ui/react';

import { useForm } from '../../lib/FormContext';

export default function TaskProgress( { value, onTaskChange = () => {} } ){
	const [state, dispatch] = useForm();

	return (
		<FormControl id="task-progress">
			<FormHelperText textAlign="left" mt={0}>
				Task Progress: <strong>{state.progress}%</strong>
			</FormHelperText>
			<Slider
				aria-label="task-progress"
				value={state.progress}
				onChange={val => dispatch({ type: 'progress', data: val })}
				step={5}
			>
				<SliderTrack bg={'blue.100'}>
					<SliderFilledTrack bg={'blue.400'} />
				</SliderTrack>
				<SliderThumb />
			</Slider>
		</FormControl>
	);
}
