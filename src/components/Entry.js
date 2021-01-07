import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import {
	Button,
	HStack,
	Stack,
	Heading,
	Box,
	Collapse,
	useColorModeValue,
} from '@chakra-ui/react';

// internal dep
// import TaskFormControl from './TaskFormControl';
import TaskName from './CreateTask/TaskName';
import TaskURL from './CreateTask/TaskURL';
import TaskProject from './CreateTask/TaskProject';
import TaskDescription from './CreateTask/TaskDescription';
import TaskStatus from './CreateTask/TaskStatus';
import TaskProgress from './CreateTask/TaskProgress';

import { SingleTask } from './SingleTask';

import { useStore } from '../Store';

const Entry = () => {
	const tasks = useStore();
	// Themes
	const boxBg = useColorModeValue('gray.50', 'gray.700');
	const boxBorderColor = useColorModeValue('blue.400', 'blue.100');

	// States
	const initialFormContent = {
		taskName: '',
		taskURL: '',
		taskProject: '',
		taskDescription: '',
		taskStatus: 'tomorrow',
		taskProgress: 30,
	};
	const [formContent, setFormContent] = React.useState(initialFormContent);
	const [tasksList, setTasksList] = React.useState([]);
	const [isFormShown, setIsFormShown] = React.useState(true);

	const addNewEntry = e => {
		console.log('add entry');
		e.preventDefault();
		addToTaskList(formContent);
		setFormContent(initialFormContent);
	};

	const handleSubmit = e => {
		console.log('handling submit');
		e.preventDefault();
		addToTaskList(formContent);
		setIsFormShown(false);
	};

	const handleTaskValues = value => {
		setFormContent(prevState => ({ ...prevState, ...value }));
	};

	const addToTaskList = task => setTasksList(prevState => [...prevState, task]);

	return (
		<>
			<Collapse in={isFormShown}>
				<Box
					bg={boxBg}
					border="2px"
					borderColor={boxBorderColor}
					p={10}
					borderRadius="8px"
					boxShadow="base"
					maxW="xl"
					width="100vw"
				>
					<form onSubmit={handleSubmit}>
						<Stack spacing={3}>
							<TaskName
								value={formContent.taskName}
								onTaskChange={handleTaskValues}
							/>
							<TaskURL
								value={formContent.taskURL}
								onTaskChange={handleTaskValues}
							/>
							<TaskProject
								value={formContent.taskProject}
								onTaskChange={handleTaskValues}
							/>
							<TaskDescription
								value={formContent.taskDescription}
								onTaskChange={handleTaskValues}
							/>
							<TaskStatus
								value={formContent.taskStatus}
								onTaskChange={handleTaskValues}
							/>
							<TaskProgress
								value={formContent.taskProgress}
								onTaskChange={handleTaskValues}
							/>
							<HStack spacing={8} justify="space-between" align="center">
								<Button type="submit" colorScheme="blue">
									Save
								</Button>
								<Button
									onClick={addNewEntry}
									variant="ghost"
									colorScheme="blue"
								>
									...or add new task
								</Button>
							</HStack>
						</Stack>
					</form>
				</Box>
			</Collapse>
			{tasks.length > 0 ? (
				<>
					<Heading as="h1" size="lg">
						Your tasks
					</Heading>
					<Stack spacing={4}>
						{tasks.map(task => (
							<SingleTask task={task} />
						))}
					</Stack>
				</>
			) : null}
		</>
	);
};

export default Entry;
