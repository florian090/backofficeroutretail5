export default function (state = null, action) {
    if (action.type === 'HISTORY_ODDS') {
        state = action.payload;
    }
    return state;
}

