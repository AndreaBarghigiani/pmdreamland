import * as React from 'react';
import { Stack, Box, Collapse, useColorModeValue } from '@chakra-ui/react';

// internal dep
import TaskName from './CreateTask/TaskName';
import TaskURL from './CreateTask/TaskURL';
import TaskProject from './CreateTask/TaskProject';
import TaskDescription from './CreateTask/TaskDescription';
import TaskStatus from './CreateTask/TaskStatus';
import TaskProgress from './CreateTask/TaskProgress';
import TaskSubmit from './CreateTask/TaskSubmit';

import { FormProvider } from '../lib/FormContext';

const Entry = () => {
	// Themes
	const boxBg = useColorModeValue('gray.50', 'gray.700');
	const boxBorderColor = useColorModeValue('blue.400', 'blue.100');

	const [isFormShown, setIsFormShown] = React.useState(false);

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
							<TaskSubmit showForm={setIsFormShown} />
						</Stack>
					</FormProvider>
				</Box>
			</Collapse>
		</>
	);
};

export default Entry;
