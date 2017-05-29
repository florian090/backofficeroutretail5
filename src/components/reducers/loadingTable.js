export default function (state = null, action) {
    if (action.type === 'LOADING_TABLE') {
        state = action.payload;
    }
    return state;
}

