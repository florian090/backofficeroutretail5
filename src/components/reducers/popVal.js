export default function (state = null, action) {
    if (action.type === 'POP_VAL') {
        state = action.payload;
    }
    return state;
}

