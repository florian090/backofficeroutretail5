export default function (state = null, action) {
    if (action.type === 'VIEW_AGENCIES_LIST') {
        state = action.payload;
    }
    return state;
}

