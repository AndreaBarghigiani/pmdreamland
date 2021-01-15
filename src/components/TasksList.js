import * as React from 'react';
import {
	Heading,
	Stack,
	Flex,
	Spacer,
	Tooltip,
	IconButton,
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

	// Empty task

	// Opening modal for editing
	const openModal = (task = null) => {
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
								colorScheme="orange"
								icon={<AddIcon />}
								isRound
								onClick={openModal}
								mr={3}
								size="xs"
							/>
						</Tooltip>
					</Flex>
					{tasks.map(task => (
						<SingleTask key={task.id} task={task} openModal={openModal} />
					))}
					<TaskModal isOpen={isOpen} onClose={onClose} task={task} />
				</Stack>
			) : (
				<Heading>No tasks found...</Heading>
			)}
		</>
	);
};

export default TasksList;
