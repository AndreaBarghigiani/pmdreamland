import * as React from 'react';
import {
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	// Stack,
	InputLeftElement,
	Select,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	Textarea,
	// useBreakpoint,
} from '@chakra-ui/react';

export default function TaskFormControl( { task, onTaskChange } ) {
	// const checkType = ( { type } ) => console.log( 'type', type );

	// useEffect( () => {
	// 	console.log( 'single task', task );
	// }, [] );

	const displayTask = item => {
		// console.log('inside displayTask this is item', item)
		switch ( item.type ) {
			// case 'input':
			// 	return displayInput( item );
			case 'textarea':
				return displayTextarea( item );
			case 'select':
				return displaySelect( item );
			case 'slider':
				return displaySlider( item );
			default:
				break;
		}
	};

	const [ curValue, setCurValue ] = React.useState( '' );

	const handleChange = e => {
		console.log( `this is the value ${ e.target.value }` );
		setCurValue( e.target.value );
		onTaskChange( e.target.value );
	};

	// const displayInput = ( { icon, placeholder, value } ) => {

	// 	const inputValue = value ? value : curValue;

	// 	const Icon = icon;
	// 	return (<InputGroup>
	// 		{ Icon &&
	// 			<InputLeftElement children={ <Icon /> } />
	// 		}
	// 		<Input bg='white' placeholder={ placeholder } value={ inputValue } onChange={ handleChange } />
	// 	</InputGroup>);
	// };

	const displayTextarea = ( { label, placeholder, value } ) => {
		return (
			<>
				{ label && <FormLabel>{ label }</FormLabel> }
				<Textarea
					bg="white"
					placeholder={ placeholder }
					value={ value }
				/>
			</>
		);
	};
	const displaySelect = ( { label, placeholder, options } ) => (
		<>
			{ label && <FormLabel>{ label }</FormLabel> }
			<Select bg="white" placeholder={ placeholder }>
				{ options.length > 0 &&
					options.map( option => (
						<option key={ option.value } value={ option.value }>
							{ option.text }
						</option>
					) ) }
			</Select>
		</>
	);

	const displaySlider = ( { id, label, startValue } ) => (
		<>
			{ label && <FormLabel>{ label }</FormLabel> }
			<Slider id={ id } defaultValue={ startValue }>
				<SliderTrack>
					<SliderFilledTrack />
				</SliderTrack>
				<SliderThumb />
			</Slider>
		</>
	);

	return (
		<FormControl id={ task.id }>
			{ displayTask( task ) }

			{ /* <InputGroup>
				<InputLeftElement children={ <CheckIcon /> } />
				<Input placeholder="Task name" />
			</InputGroup> */ }
		</FormControl>
	);
}

// TODO: add default props
