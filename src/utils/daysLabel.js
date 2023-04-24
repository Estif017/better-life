import moment from 'moment';
const today = moment();
export const dates = [
	today.clone().subtract(6, 'days').format('ddd, MMM D'),
	today.clone().subtract(5, 'days').format('ddd, MMM D'),
	today.clone().subtract(4, 'days').format('ddd, MMM D'),
	today.clone().subtract(3, 'days').format('ddd, MMM D'),
	today.clone().subtract(2, 'days').format('ddd, MMM D'),
	today.clone().subtract(1, 'days').format('ddd, MMM D'),
	today.format('ddd, MM D'),
];
