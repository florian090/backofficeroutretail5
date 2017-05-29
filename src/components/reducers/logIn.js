export default function (state = false, action) {
    if (action.type === 'LOGED_IN') {
        state = action.payload;
    }
    return state;
}

