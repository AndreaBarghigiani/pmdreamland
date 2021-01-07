import { taskStatuses } from './sampleData'

export function getStatusText(value, statuses = taskStatuses){
	return statuses.filter( item => item.value === value )[0].text;
}

export function getStatusColor(value, statuses = taskStatuses){
	const match = statuses.filter( item => item.value === value );
	switch(match[0].value){
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
