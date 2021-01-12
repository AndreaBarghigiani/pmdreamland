import * as React from 'react';

import { VStack } from '@chakra-ui/react';
import Entry from '../components/Entry';

export default function UserTasks() {
	return (
		<VStack spacing={8}>
			<Entry />
		</VStack>
	);
}
