import * as React from 'react';
import { 
	Avatar,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'

import { useUser } from '../lib/UserContext';
import { supabase, addUser, getPublicUser } from '../lib/Store';

const Auth = () => {
	const [user, setUser] = useUser();

	// Check if we have a user logged in
	React.useEffect(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange(
			async (event, session) => {
				if (session?.user) {
					const publicUser = await getPublicUser(session?.user);
					setUser(publicUser);
				}
			}
		);

		// Cleanup function
		return () => {
			authListener.unsubscribe();
		};
	}, [setUser]);

	const handleLogin = async e => {
		e.preventDefault();
		switch (e.target.name) {
			case 'login':
				await supabase.auth.signIn({ provider: 'bitbucket' });
				break;
			case 'logout':
				await supabase.auth.signOut();
				break;
			default:
				break;
		}
	};

	const colorButton = user ? 'red' : 'green';
	const textButton = user ? 'Logout' : 'Login';
	const nameButton = user ? 'logout' : 'login';
	
	return (
		<>
			{user ? (
				<>
					<Link to="/">Home</Link>
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
							<MenuItem>Logout</MenuItem>
						</MenuList>
					</Menu>
				</>
			) : (
				<Button
					name={nameButton}
					type="submit"
					onClick={handleLogin}
					colorScheme={colorButton}
					ml="3"
				>
					{textButton}
				</Button>
			)}
		</>
	);
};

export default Auth;
