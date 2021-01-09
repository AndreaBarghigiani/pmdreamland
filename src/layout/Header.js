import * as React from 'react';
import { Flex, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import Auth from '../components/Auth';

export default function Header({ addTask }) {
	return (
		<Flex align="center">
			<Spacer />
			<Auth addTask={addTask} />
			<ColorModeSwitcher justifySelf="flex-end" />
		</Flex>
	);
}
