import moment from 'moment';

var defaultVal = {
    'startDate': moment().format('YYYY/MM/DD'),
    'endDate': moment().format('YYYY/MM/DD'),
    'lottery': 'all',
    'round': 'all',
    'casa': null,
    'status': 'all',
    'username': 'all',
    'country': 'all'
}
export default function (state = defaultVal, action) {
    if (action.type === 'FILTRU_DATA') {
        state = action.payload;
    }
    return state;
}
