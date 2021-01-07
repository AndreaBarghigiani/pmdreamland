import * as React from 'react'

import {
	FormControl,
	FormHelperText,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	useColorModeValue
} from "@chakra-ui/react"

export default function TaskProgress( { value, onTaskChange = () => {} } ){
	// const trackBg = useColorModeValue( 'blue.100', 'blue.400');
	// const filledTrackBg = useColorModeValue( 'blue.400', 'blue.100');

	const handleChange = (val) => {
		onTaskChange( { taskProgress: val } );
	}

	return (
		<FormControl id='task-progress'>
		<FormHelperText textAlign='left' mt={0}>Task Progress: <strong>{ value }%</strong></FormHelperText>
			<Slider 
				aria-label='task-progress' 
				defaultValue={ value } 
				onChange={ handleChange }
				step={ 5 }
			>
				<SliderTrack bg={'blue.100'}>
					<SliderFilledTrack bg={'blue.400'} />
				</SliderTrack>
				<SliderThumb />
			</Slider>
		</FormControl>
	);
}
