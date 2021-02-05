import * as React from 'react';
import {
	Heading,
	Stack,
	Flex,
	Spacer,
	Tooltip,
	IconButton,
	Divider,
	Button,
	useDisclosure,
	useToast,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import SingleTask from './SingleTask';
import TaskModal from './TaskModal';

import { fetchUserTasks } from '../lib/Store';
import { useUser } from '../lib/UserContext';
import { getEtaText, getStatusText, copyToClipboard } from '../utility';

function transformTaskToString(
	index,
	{ name, progress, status, eta, description, url }
) {
	const statusText = getStatusText(status);
	const etaText = getEtaText(eta);

	return `
*Task ${++index}*
_Jira Link_: ${url}
_Title: *${name}*_
_Notes_: ${description}
_Progress_: ${progress}%
_ETA_: ${etaText}
_Status_: ${statusText}
----------------------------------------`;
}

const TasksList = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [tasks, setTasks] = React.useState([]);
	const [task, setTask] = React.useState(null);
	const [user] = useUser();
	const toast = useToast();

	// Fetching user tasks
	React.useEffect(() => fetchUserTasks(user.id).then(res => setTasks(res)), [
		user.id,
	]);

	// Kinda Optimistic Update
	// Momentarly set tasks, next implementation will use React Query
	function updateTasks(updatedTask, { isNew = false, toDelete = false } = {} ) {
		let updatedTasks;
		
		if(isNew){
			updatedTasks = [ ...tasks, updatedTask];
			return setTasks(updatedTasks);
		}

		if(toDelete){
			updatedTasks = tasks.filter(task => task.id !== updatedTask.id);
			return setTasks(updatedTasks);
		}
		
		// Keep the updating, more expensive, job at the end in order to run it only if needed.
		updatedTasks = tasks.map(task => {
			if (task.id === updatedTask.id) {
				task = updatedTask;
			}

			return task;
		});

		
		setTasks(updatedTasks);
	}

	// Opening modal for editing
	function openModal(e, task = null) {
		e.preventDefault();
		setTask(task);
		onOpen();
	}

	function copyForSlack() {
		let tmpMarkDown = tasks.map((task, i) => transformTaskToString(i, task));
		copyToClipboard(tmpMarkDown.join(''));
		toast({
			position: 'bottom-right',
			title: 'Tasks Copied',
			description: "You're can copy your report into Slack now",
			status: 'success',
			duration: 5000,
			isClosable: true,
		});
	}

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
					<Divider />
					<Flex justify={'flex-end'}>
						<Button onClick={copyForSlack} colorScheme={'blue'}>
							Copy for Slack
						</Button>
					</Flex>
				</Stack>
			) : (
				<>
					<Heading>No tasks found...</Heading>
					<Button onClick={openModal} colorScheme={'green'}>
						Add your first task
					</Button>
				</>
			)}
			<TaskModal
				isOpen={isOpen}
				onClose={onClose}
				task={task}
				updateTasks={updateTasks}
			/>
		</>
	);
};

export default TasksList;
