import * as React from 'react';
import { supabase, getPublicUser } from './Store';
const UserContext = React.createContext();

export function UserProvider(props) {
	const [session, setSession] = React.useState(null);
	const [user, setUser] = React.useState(null);
	const [publicUser, setPublicUser] = React.useState(null);

	// Check if we have a user logged in
	React.useEffect(() => {
		const session = supabase.auth.session();
		console.log('session', session);
		setSession(session);
		setUser(session?.user ?? null);
		setTimeout(async () => {
			const publicUser = await getPublicUser(session.user);
			setPublicUser(publicUser);
		}, 100);
		const { data: authListener } = supabase.auth.onAuthStateChange(
			async (event, session) => {
				if (session?.user) {
					const publicUser = await getPublicUser(session.user);
					setSession(session);
					setUser(session.user);
					setPublicUser(publicUser);
				}

				// @todo: implement redirect on logout
			}
		);

		// Cleanup function
		return () => {
			authListener.unsubscribe();
		};
	}, [setUser]);

	const value = [publicUser, user, session];

	return <UserContext.Provider value={value} {...props} />;
}

export function useUser() {
	const context = React.useContext(UserContext);

	if (!context) {
		throw new Error('useUser must be used within the UserProvider');
	}

	return context;
}
