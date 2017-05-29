export default function (state = null, action) {
    if (action.type === 'USER_SETTINGS') {
        state = action.payload;
    }
    return state;
}

