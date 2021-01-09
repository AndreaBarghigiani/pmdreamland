import * as React from 'react';
import {
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
import TaskSubmit from './CreateTask/TaskSubmit';

import { SingleTask } from './SingleTask';
import { useStore } from '../lib/Store';
import { FormProvider } from '../lib/FormContext';

const Entry = ({ showForm }) => {
	const tasks = useStore();

	// Themes
	const boxBg = useColorModeValue('gray.50', 'gray.700');
	const boxBorderColor = useColorModeValue('blue.400', 'blue.100');

	const [isFormShown, setIsFormShown] = React.useState(showForm);

	// Keep here because add task form can be handled by submit as well
	React.useEffect(() => {
		setIsFormShown(showForm);
	}, [showForm]);

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
					<FormProvider>
						<Stack spacing={3}>
							<TaskName />
							<TaskURL />
							<TaskProject />
							<TaskDescription />
							<TaskStatus />
							<TaskProgress />
							<TaskSubmit />
						</Stack>
					</FormProvider>
				</Box>
			</Collapse>
			{tasks.length > 0 ? (
				<>
					<Heading as="h1" size="lg">
						Your tasks
					</Heading>
					<Stack spacing={4}>
						{tasks.map(task => (
							<SingleTask key={task.id} task={task} />
						))}
					</Stack>
				</>
			) : null}
		</>
	);
};

export default Entry;
