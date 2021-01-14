import * as React from 'react';

import { VStack } from '@chakra-ui/react';
import Entry from '../components/Entry';
import TasksList from '../components/TasksList';

export default function UserTasks() {
	return (
		<VStack spacing={8}>
			<Entry />
			<TasksList />
		</VStack>
	);
}
