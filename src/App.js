import React from 'react';
import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Entry from './components/Entry';
// import { useStore } from './Store';

function App() {
	// const tasks = useStore();
	// console.log('tasks', tasks);
	return (
		<ChakraProvider theme={theme}>
			<Box textAlign="center" fontSize="xl">
				<Grid minH="100vh" p={3}>
					<ColorModeSwitcher justifySelf="flex-end" />
					<VStack spacing={8}>
						<Entry />
					</VStack>
				</Grid>
			</Box>
		</ChakraProvider>
	);
}

export default App;
