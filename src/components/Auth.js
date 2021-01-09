import * as React from 'react';
import { Button } from '@chakra-ui/react';

import { useUser } from '../lib/UserContext';
import { supabase, addUser } from '../lib/Store';

const Auth = ({ addTask }) => {
	const [user, setUser] = useUser();

	// Check if we have a user logged in
	React.useEffect(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange(
			async (event, session) => {
				setUser(session?.user ?? null);
				if (session?.user) {
					addUser(session?.user);
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
				<Button colorScheme="green" onClick={() => addTask(true)}>
					Add task
				</Button>
			) : null}
			<Button
				name={nameButton}
				type="submit"
				onClick={handleLogin}
				colorScheme={colorButton}
				ml="3"
			>
				{textButton}
			</Button>
		</>
	);
};

export default Auth;
