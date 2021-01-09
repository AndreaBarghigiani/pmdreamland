import * as React from 'react';

const FormContext = React.createContext();

// States
const initialFormContent = {
	name: '',
	url: '',
	project: '',
	description: '',
	status: 'tomorrow',
	progress: 30,
	user_id: '',
};

function formReducer(state, action) {
	switch (action.type) {
		case 'name':
			return {
				...state,
				name: action.data,
			};
		case 'url':
			return {
				...state,
				url: action.data,
			};
		case 'project':
			return {
				...state,
				project: action.data,
			};
		case 'description':
			return {
				...state,
				description: action.data,
			};
		case 'status':
			return {
				...state,
				status: action.data,
			};
		case 'progress':
			return {
				...state,
				progress: action.data,
			};
		case 'user_id':
			return {
				...state,
				user_id: action.data,
			};
		default:
			throw new Error('no action passed');
	}
}

export function FormProvider(props) {
	const [formContent, dispatch] = React.useReducer(
		formReducer,
		initialFormContent
	);
	const value = [formContent, dispatch];

	return <FormContext.Provider value={value} {...props} />;
}

export function useForm() {
	const context = React.useContext(FormContext);

	if (!context) {
		throw new Error('useForm must be used within the FormProvider');
	}

	return context;
}
