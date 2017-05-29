export default function (state = null, action) {
    if (action.type === 'VIEW_ODDS_LIST') {
        state = action.payload;
    }
    return state;
}

