import * as React from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Stack,
	SimpleGrid,
} from '@chakra-ui/react';

// internal dep
import TaskName from './CreateTask/TaskName';
import TaskURL from './CreateTask/TaskURL';
import TaskProject from './CreateTask/TaskProject';
import TaskNotes from './CreateTask/TaskNotes';
import TaskEta from './CreateTask/TaskEta';
import TaskStatus from './CreateTask/TaskStatus';
import TaskProgress from './CreateTask/TaskProgress';
import TaskSubmit from './CreateTask/TaskSubmit';

import { FormProvider } from '../lib/FormContext';

const TaskModal = ({ isOpen, onClose, task = null, updateTasks }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} size={'xl'} isCentered>
			<ModalOverlay />
			<ModalContent>
				<FormProvider>
					<ModalHeader>{task ? 'Edit' : 'Add'} Task</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<TaskName fill={task} label={'Name'} />
						<SimpleGrid columns={2} spacing={5} mt={5} mb={5}>
							<TaskURL label={'URL'} />
							<TaskProject label={'Project'} />
							<TaskEta label={'ETA'} />
							<TaskStatus label={'Status'} />
						</SimpleGrid>
						<TaskProgress label={'Progress'} />
						<TaskNotes label={'Notes'} />
					</ModalBody>

					<ModalFooter>
						<TaskSubmit
							onClose={onClose}
							fill={task}
							updateTasks={updateTasks}
						/>
					</ModalFooter>
				</FormProvider>
			</ModalContent>
		</Modal>
	);
};

export default TaskModal;
