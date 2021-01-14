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
} from '@chakra-ui/react';

// internal dep
import TaskName from './CreateTask/TaskName';
import TaskURL from './CreateTask/TaskURL';
import TaskProject from './CreateTask/TaskProject';
import TaskDescription from './CreateTask/TaskDescription';
import TaskStatus from './CreateTask/TaskStatus';
import TaskProgress from './CreateTask/TaskProgress';
import TaskSubmit from './CreateTask/TaskSubmit';

import { FormProvider } from '../lib/FormContext';

const TaskModal = ({ isOpen, onClose, task = null }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<FormProvider>
					<ModalHeader>{task ? 'Edit' : 'Add'} Task</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Stack spacing={3}>
							<TaskName fill={task} />
							<TaskURL />
							<TaskProject />
							<TaskDescription />
							<TaskStatus />
							<TaskProgress />
						</Stack>
					</ModalBody>

					<ModalFooter>
						<TaskSubmit onClose={onClose} fill={task} />
					</ModalFooter>
				</FormProvider>
			</ModalContent>
		</Modal>
	);
};

export default TaskModal;
