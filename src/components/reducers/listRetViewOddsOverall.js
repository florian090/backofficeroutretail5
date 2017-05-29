export default function (state = null, action) {
    if (action.type === 'VIEW_ODDS_OVERALL') {
        state = action.payload;
    }
    return state;
}

