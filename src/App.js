import React from 'react';
import {
	Box,
	VStack,
	Grid,
	Heading
} from '@chakra-ui/react';

import Header from './layout/Header'
import Entry from './components/Entry';
import { useUser } from './lib/UserContext'

function App() {
	const [user] = useUser(); 
	const [ addTask, setAddTask ] = React.useState(false)
	return (
		<Box textAlign="center" fontSize="xl">
			<Grid p={3}>
				<Header addTask={ setAddTask } />
				{ user 
				? (
					<VStack spacing={8}>
						<Entry addTask={addTask} />
					</VStack>
				) : <Heading>You must be logged in</Heading> }
			</Grid>
		</Box>
	);
}

export default App;
