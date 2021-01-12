import * as React from 'react';
import { Heading, Text, Checkbox, useCheckbox, Button } from '@chakra-ui/react';

export default function UserProfile() {
	const isCheck = useCheckbox();

	const saveProfile = e => {
		e.preventDefault();
		console.log('you want to save the profile');
		console.log('this is the value of isCheck', isCheck);
		console.log('this is the target', e.target);
	};

	return (
		<>
			<Heading>Welcome to your profile</Heading>
			<Checkbox value="pm">Are you a Project Manager?</Checkbox>
			<Button colorScheme="green" onClick={saveProfile}>
				Save Profile
			</Button>
		</>
	);
}
