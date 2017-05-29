export default function (state = null, action) {
    if (action.type === 'VIEW_TICKETS_LIST') {
        state = action.payload;
    }
    return state;
}

