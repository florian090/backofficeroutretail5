export default function (state = null, action) {
    if (action.type === 'TICKETS_LIST') {
        state = action.payload;
    }
    return state;
}

