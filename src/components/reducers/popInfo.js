export default function (state = null, action) {
    if (action.type === 'POP_INFO') {
        state = action.payload;
    }
    return state;
}

