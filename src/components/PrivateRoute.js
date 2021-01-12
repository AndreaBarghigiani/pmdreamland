import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUser } from '../lib/UserContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const [user] = useUser();
	return (
		<Route
			{...rest}
			render={rest => {
				if (user) {
					return <Component {...rest} />;
				} else {
					return <Redirect to="/" />;
				}
			}}
		/>
  );
};

export default PrivateRoute;
