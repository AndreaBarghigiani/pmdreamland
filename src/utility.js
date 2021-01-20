export const taskEta = [
	{ value: 'tomorrow', text: 'Tomorrow' },
	{ value: 'two-three-days', text: 'Two or three days' },
	{ value: 'less-week', text: 'Less than a week' },
	{ value: 'one-week', text: 'One week' },
	{ value: 'two-weeks', text: 'Two weeks' },
	{ value: 'more', text: 'More...' },
];

export function getEtaText(value, etas = taskEta) {
	console.log('value', value);
	console.log('etas', etas);
	return etas.filter(item => item.value === value)[0].text;
}

export function getEtaColor(value, etas = taskEta) {
	const match = etas.filter(item => item.value === value);
	switch (match[0].value) {
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
