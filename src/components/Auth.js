import * as React from 'react';
import {
	Avatar,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'

import { useUser } from '../lib/UserContext';
import { supabase } from '../lib/Store';

const Auth = () => {
	const [user] = useUser();

	return (
		<>
			{user ? (
				<>	
					<Menu>
						<MenuButton
							as={Avatar}
							bg="green.400"
							size="sm"
							cursor="pointer"
							_hover={{ bg: 'green.500' }}
						/>
						<MenuList>
							<MenuItem>
								<Link to="/profile">Profile</Link>
							</MenuItem>
							<MenuItem
								as="Button"
								name="logout"
								onClick={() => supabase.auth.signOut()}
							>
								Logout
							</MenuItem>
						</MenuList>
					</Menu>
				</>
			) : (
				<Button
					onClick={() => {
						supabase.auth.signIn({ provider: 'bitbucket' });
					}}
					colorScheme="green"
				>
					Login
				</Button>
			)}
		</>
	);
};

export default Auth;
