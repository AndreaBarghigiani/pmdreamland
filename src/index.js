import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import { ColorModeScript } from '@chakra-ui/react';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

// Pages
import App from './App';
import UserProfile from './pages/UserProfile'
import Header from './layout/Header'

// Providers
import { ChakraProvider, theme, Grid } from '@chakra-ui/react'
import { UserProvider } from './lib/UserContext';

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
	<ChakraProvider theme={theme}>
		<UserProvider>
			<Grid p={3}>
				<Router>
					<Header />
					<Switch>
						<Route exact path='/'>
							<App />
						</Route>
						<Route path='/profile'>
							<UserProfile />
						</Route>
						{/* <Route path='/tasks'>
							<UserProfile />
						</Route> */}
					</Switch>
				</Router>
			</Grid>
		</UserProvider>
	</ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
