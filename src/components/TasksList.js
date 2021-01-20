import * as React from 'react';
import {
	Heading,
	Stack,
	Flex,
	Spacer,
	Tooltip,
	IconButton,
	Button,
	useDisclosure,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import SingleTask from './SingleTask';
import TaskModal from './TaskModal';

import { fetchUserTasks } from '../lib/Store';
import { useUser } from '../lib/UserContext';

const TasksList = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [tasks, setTasks] = React.useState([]);
	const [task, setTask] = React.useState(null);
	const [user] = useUser();

	// Fetching user tasks
	React.useEffect(() => fetchUserTasks(user.id).then(res => setTasks(res)), [
		user.id,
	]);

	// Momentarly set tasks, next implementation will use React Query with Optimistic Updates
	const updateTasks = (updatedTask) => {
		console.log('updatedTask', updatedTask);
		const updatedTasks = tasks.map( task => {
			if(task.id === updatedTask.id ){
				task = updatedTask;
			}

			return task;
		} );
		console.log('updatedTasks', updatedTasks);
		setTasks(updatedTasks)
	};

	// Opening modal for editing
	const openModal = (e, task = null) => {
		e.preventDefault();
		setTask(task);
		onOpen();
	};

	return (
		<>
			{tasks?.length > 0 ? (
				<Stack spacing={4}>
					<Flex align="center">
						<Heading as="h1" size="lg">
							Your tasks
						</Heading>
						<Spacer />
						<Tooltip label="Add task" placement="right">
							<IconButton
								aria-label="Add task"
								colorScheme="green"
								icon={<AddIcon />}
								isRound
								onClick={openModal}
								ml={3}
								size="xs"
							/>
						</Tooltip>
					</Flex>
					{tasks.map(task => (
						<SingleTask key={task.id} task={task} openModal={openModal} />
					))}
				</Stack>
			) : (
				<>
					<Heading>No tasks found...</Heading>
					<Button onClick={openModal} colorScheme={'green'}>Add your first task</Button>
				</>
			)}
			<TaskModal isOpen={isOpen} onClose={onClose} task={task} updateTasks={updateTasks} />
		</>
	);
};

export default TasksList;
