import React from 'react';
import { HStack, VStack, Heading, Button } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { useUser } from './lib/UserContext'

function App() {
	const [user] = useUser(); 
	
	return (
		<>
			{user ? (
				<VStack spacing={8}>
					<Heading>Welcooome</Heading>
					<HStack spacing={4}>
						<Button as={Link} to="/tasks" colorScheme='green'>
							Go to your task
						</Button>
						{user.role === 'projectmanager' ?
							<Button as={Link} to="/dashboard" colorScheme='blue'>
								Go to the dashboard
							</Button> : null
						}
					</HStack>
				</VStack>
			) : (
				<Heading>You must be logged in</Heading>
			)}
		</>
	);
}

export default App;
