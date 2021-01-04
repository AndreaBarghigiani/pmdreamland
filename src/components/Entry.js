import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Button, HStack, Stack, Heading, Box, Collapse, useDisclosure, useColorModeValue } from '@chakra-ui/react';

// internal dep
// import TaskFormControl from './TaskFormControl';
import TaskName from '../components/SingleTask/TaskName';
import TaskURL from '../components/SingleTask/TaskURL';
import TaskProject from '../components/SingleTask/TaskProject';
import TaskDescription from '../components/SingleTask/TaskDescription';
import TaskStatus from '../components/SingleTask/TaskStatus';
import TaskProgress from '../components/SingleTask/TaskProgress';

const Entry = () => {
	// Themes
	const mainColor = useColorModeValue('blue.400', 'blue.100');
	const secColor = useColorModeValue('white', 'black');
	
	// States 
	const initialFormContent = {
		taskName: '',
		taskURL: '',
		taskProject: '',
		taskDescription: '',
		taskStatus: 'tomorrow',
		taskProgress: 30,
	}
	const [ formContent, setFormContent ] = React.useState( initialFormContent );
	const [ tasksList, setTasksList ] = React.useState([]);
	const [ isFormShown, setIsFormShown ] = React.useState(true);

	const addNewEntry = e => {
		console.log( 'add entry' );
		e.preventDefault();
		addToTaskList(formContent);
		setFormContent( initialFormContent );
	};

	const handleSubmit = e => {
		console.log( 'handling submit' );
		e.preventDefault();
		addToTaskList(formContent);
		setIsFormShown(false);
	};

	const handleTaskValues = value => {
		setFormContent( prevState => ( { ...prevState, ...value } ) )
	};

	const addToTaskList = (task) => setTasksList( prevState => ( [ ...prevState, task ] ) );

	return (
		<>
		<Collapse in={isFormShown}>
			<Box
				bg="gray.50"
				p={ 10 }
				borderRadius="8px"
				boxShadow="base"
				maxW="xl"
				width="100vw"
			>
				<form onSubmit={ handleSubmit }>
					<Stack spacing={ 3 }>
						<TaskName value={ formContent.taskName } onTaskChange={ handleTaskValues } />
						<TaskURL value={ formContent.taskURL } onTaskChange={ handleTaskValues } />
						<TaskProject value={ formContent.taskProject } onTaskChange={ handleTaskValues } />
						<TaskDescription value={ formContent.taskDescription } onTaskChange={ handleTaskValues } />
						<TaskStatus value={ formContent.taskStatus } onTaskChange={ handleTaskValues } />
						<TaskProgress value={ formContent.taskProgress } onTaskChange={ handleTaskValues } />
						<HStack
							spacing={ 8 }
							justify="space-between"
							align="center"
						>
							<Button type="submit" bg={mainColor} textColor={secColor} _hover={{bg: 'blue.800'}}>
								Save
							</Button>
							<Button
								onClick={ addNewEntry }
								variant="ghost"
								textColor={mainColor}
							>
								...or add new task
							</Button>
						</HStack>
					</Stack>
				</form>
			</Box>
		</Collapse>
		{ tasksList.length > 0 ? (
			<>
			<Heading as='h1' size='lg'>Your tasks</Heading>
			{ tasksList.map( task => (
				<Box
					bg="gray.50"
					p={ 10 }
					borderRadius="8px"
					boxShadow="base"
					maxW="xl"
					width="100vw"
					key={task.taskName}
				>
					<Heading as="h3" size='sm'>{task.taskName}</Heading>
				</Box>
			))}
			</>
		) : null }
		</>
	);
};

export default Entry;
