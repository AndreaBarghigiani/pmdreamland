import React from 'react';
import {
	Container,
	VStack,
	Grid,
	Heading
} from '@chakra-ui/react';

import Entry from './components/Entry';
import { useUser } from './lib/UserContext'

function App() {
	const [user] = useUser(); 
	return (
		<Container maxW='xl' p={3} centerContent fontSize="xl">
				{user ? (
					<VStack spacing={8}>
						<Entry />
					</VStack>
				) : (
					<Heading>You must be logged in</Heading>
				)}
		</Container>
	);
}

export default App;
