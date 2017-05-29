export default function (state = null, action) {
    if (action.type === 'VALIDATE_TICKETS') {
        state = action.payload;
    }
    return state;
}

