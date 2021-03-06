import * as React from 'react'

import {
	FormControl,
	FormLabel,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
} from '@chakra-ui/react';

import { useForm } from '../../lib/FormContext';

export default function TaskProgress( { label } ){
	const [state, dispatch] = useForm();

	return (
		<FormControl id="task-progress">
			{label ? (
				<FormLabel fontWeight={600}>
					{label}: {state.progress}%
				</FormLabel>
			) : null}
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
