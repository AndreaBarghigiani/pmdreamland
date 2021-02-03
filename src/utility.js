export const taskStatus = [
	{ value: 'in-development', text: 'In Development' },
	{ value: 'sanity-check', text: 'Sanity Check' },
	{ value: 'qa-ready', text: 'QA Ready' },
	{ value: 'require-feedback', text: 'Require Feedback' },
	{ value: 'released', text: 'released' },
	{ value: 'blocked', text: 'Blocked' },
];

export function getStatusText(value, status = taskStatus) {
	value = value || status[0].value;
	return status.filter(item => item.value === value)[0].text;
}

export const taskEta = [
	{ value: 'ready', text: 'Ready' },
	{ value: 'tomorrow', text: 'Tomorrow' },
	{ value: 'two-three-days', text: 'Two or three days' },
	{ value: 'less-week', text: 'Less than a week' },
	{ value: 'one-week', text: 'One week' },
	{ value: 'two-weeks', text: 'Two weeks' },
	{ value: 'more', text: 'More...' },
];

export function getEtaText(value, etas = taskEta) {
	value = value || etas[0].value;
	return etas.filter(item => item.value === value)[0].text;
}

export function getEtaColor(value, etas = taskEta) {
	value = value === '' ? 'tomorrow' : value;
	const match = etas.filter(item => item.value === value);
	switch (match[0].value) {
		case 'ready':
		case 'tomorrow':
			return 'green';
		case 'two-three-days':
		case 'less-week':
			return 'teal';
		case 'one-week':
		case 'two-weeks':
			return 'orange';
		default:
			return 'red';
	}
}

export const isObjectEmpty = obj => {
	for (const prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			return false;
		}
	}

	return true;
};
