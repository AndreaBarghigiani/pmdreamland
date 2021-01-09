import * as React from 'react';

const UserContext = React.createContext();

export function UserProvider(props) {
	const [user, setUser] = React.useState(null);
	const value = [user, setUser];

	return <UserContext.Provider value={value} {...props} />;
}

export function useUser() {
	const context = React.useContext(UserContext);

	if (!context) {
		throw new Error('useUser must be used within the UserProvider');
	}

	return context;
}
